import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, Download, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewAssignment {
  id: string;
  articleTitle: string;
  submittedDate: string;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  recommendation?: 'accept' | 'minor_revision' | 'major_revision' | 'reject';
}

const ReviewDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');
  
  const mockReviews: ReviewAssignment[] = [
    {
      id: '1',
      articleTitle: 'Machine Learning Applications in Healthcare: A Comprehensive Review',
      submittedDate: '2025-01-15',
      dueDate: '2025-02-05',
      status: 'in_progress',
    },
    {
      id: '2',
      articleTitle: 'Quantum Computing: Recent Advances and Future Perspectives',
      submittedDate: '2025-01-20',
      dueDate: '2025-02-10',
      status: 'pending',
    },
    {
      id: '3',
      articleTitle: 'Climate Change Impact on Marine Ecosystems',
      submittedDate: '2024-12-10',
      dueDate: '2024-12-31',
      status: 'completed',
      recommendation: 'minor_revision',
    },
  ];

  const stats = [
    { label: 'Pending Reviews', value: '2', icon: Clock, color: 'orange' },
    { label: 'In Progress', value: '1', icon: AlertCircle, color: 'blue' },
    { label: 'Completed', value: '12', icon: CheckCircle, color: 'green' },
    { label: 'Avg. Review Time', value: '18 days', icon: FileText, color: 'purple' },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      in_progress: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      overdue: 'bg-red-100 text-red-700',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'overdue':
        return <XCircle className="w-4 h-4" />;
      case 'in_progress':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredReviews = mockReviews.filter(review =>
    activeTab === 'pending' ? review.status !== 'completed' : review.status === 'completed'
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Review Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your peer review assignments</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'pending'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Pending Reviews ({mockReviews.filter(r => r.status !== 'completed').length})
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'completed'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Completed ({mockReviews.filter(r => r.status === 'completed').length})
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {filteredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`flex items-center space-x-2 text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(review.status)}`}>
                          {getStatusIcon(review.status)}
                          <span className="capitalize">{review.status.replace('_', ' ')}</span>
                        </span>
                        {review.recommendation && (
                          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                            Recommendation: {review.recommendation.replace('_', ' ')}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {review.articleTitle}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Submitted: {review.submittedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4" />
                          <span>Due: {review.dueDate}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          <FileText className="w-4 h-4" />
                          <span>{review.status === 'completed' ? 'View Review' : 'Start Review'}</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Download className="w-4 h-4" />
                          <span>Download Manuscript</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <MessageSquare className="w-4 h-4" />
                          <span>Message Editor</span>
                        </button>
                      </div>
                    </div>

                    {review.status === 'in_progress' && (
                      <div className="lg:w-48">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm font-semibold text-blue-900 mb-2">Progress</p>
                          <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <p className="text-xs text-blue-700">60% Complete</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {filteredReviews.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No {activeTab} reviews</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDashboard;

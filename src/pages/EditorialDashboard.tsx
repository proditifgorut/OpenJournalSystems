import React, { useState } from 'react';
import { FileText, Users, CheckCircle, Clock, TrendingUp, UserPlus, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { SubmissionStatus } from '../types';

interface Submission {
  id: string;
  title: string;
  author: string;
  submittedDate: string;
  status: SubmissionStatus;
  assignedReviewers: number;
  section: string;
}

const EditorialDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'review' | 'decision'>('all');

  const mockSubmissions: Submission[] = [
    {
      id: '1',
      title: 'Advanced Machine Learning Techniques for Medical Diagnosis',
      author: 'Dr. John Smith',
      submittedDate: '2025-01-25',
      status: 'under_review',
      assignedReviewers: 2,
      section: 'Computer Science',
    },
    {
      id: '2',
      title: 'Sustainable Energy Solutions for Urban Development',
      author: 'Dr. Sarah Johnson',
      submittedDate: '2025-01-22',
      status: 'submitted',
      assignedReviewers: 0,
      section: 'Engineering',
    },
    {
      id: '3',
      title: 'Novel Approaches in Cancer Treatment Research',
      author: 'Dr. Michael Chen',
      submittedDate: '2025-01-20',
      status: 'revision_required',
      assignedReviewers: 3,
      section: 'Medicine',
    },
  ];

  const stats = [
    { label: 'New Submissions', value: '15', icon: FileText, color: 'blue', change: '+12%' },
    { label: 'Under Review', value: '28', icon: Clock, color: 'orange', change: '+5%' },
    { label: 'Awaiting Decision', value: '8', icon: CheckCircle, color: 'purple', change: '-3%' },
    { label: 'Published This Month', value: '42', icon: TrendingUp, color: 'green', change: '+18%' },
  ];

  const getStatusBadge = (status: SubmissionStatus) => {
    const styles = {
      draft: 'bg-gray-100 text-gray-700',
      submitted: 'bg-blue-100 text-blue-700',
      under_review: 'bg-orange-100 text-orange-700',
      revision_required: 'bg-yellow-100 text-yellow-700',
      accepted: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700',
      published: 'bg-purple-100 text-purple-700',
    };
    return styles[status];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Editorial Dashboard</h1>
          <p className="text-lg text-gray-600">Manage submissions and editorial workflow</p>
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
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                All Submissions
              </button>
              <button
                onClick={() => setActiveTab('review')}
                className={`py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'review'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Needs Reviewers
              </button>
              <button
                onClick={() => setActiveTab('decision')}
                className={`py-4 font-semibold border-b-2 transition-colors ${
                  activeTab === 'decision'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Awaiting Decision
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {mockSubmissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(submission.status)}`}>
                          {submission.status.replace('_', ' ').toUpperCase()}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {submission.section}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {submission.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{submission.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Submitted: {submission.submittedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <UserPlus className="w-4 h-4" />
                          <span>{submission.assignedReviewers} Reviewers Assigned</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          <FileText className="w-4 h-4" />
                          <span>View Submission</span>
                        </button>
                        {submission.assignedReviewers === 0 && (
                          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                            <UserPlus className="w-4 h-4" />
                            <span>Assign Reviewers</span>
                          </button>
                        )}
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Send className="w-4 h-4" />
                          <span>Message Author</span>
                        </button>
                      </div>
                    </div>

                    {submission.status === 'under_review' && (
                      <div className="lg:w-56">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <p className="text-sm font-semibold text-orange-900 mb-3">Review Progress</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-orange-700">
                              <span>Reviewer 1</span>
                              <span className="font-semibold">Completed</span>
                            </div>
                            <div className="flex justify-between text-xs text-orange-700">
                              <span>Reviewer 2</span>
                              <span className="font-semibold">In Progress</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900 font-medium">New submission received</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                <UserPlus className="w-5 h-5" />
                <span>Invite Reviewers</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Make Editorial Decision</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors font-medium">
                <FileText className="w-5 h-5" />
                <span>Create New Issue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialDashboard;

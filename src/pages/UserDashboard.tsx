import React from 'react';
import { FileText, Eye, Download, Clock, CheckCircle, XCircle, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { UserRole } from '../types';

interface UserDashboardProps {
  userRole: UserRole;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ userRole }) => {
  const stats = [
    { label: 'Total Submissions', value: '8', icon: FileText, color: 'blue' },
    { label: 'Under Review', value: '3', icon: Clock, color: 'orange' },
    { label: 'Accepted', value: '4', icon: CheckCircle, color: 'green' },
    { label: 'Rejected', value: '1', icon: XCircle, color: 'red' },
  ];

  const submissions = [
    {
      id: '1',
      title: 'Machine Learning Applications in Healthcare',
      status: 'under_review',
      submittedDate: '2025-01-15',
      views: 245,
      downloads: 67,
    },
    {
      id: '2',
      title: 'Quantum Computing: Recent Advances',
      status: 'revision_required',
      submittedDate: '2025-01-10',
      views: 189,
      downloads: 45,
    },
    {
      id: '3',
      title: 'Climate Change Impact Analysis',
      status: 'accepted',
      submittedDate: '2024-12-20',
      views: 512,
      downloads: 234,
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      under_review: 'bg-orange-100 text-orange-700',
      revision_required: 'bg-yellow-100 text-yellow-700',
      accepted: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700',
      published: 'bg-purple-100 text-purple-700',
    };
    return colors[status as keyof typeof colors] || colors.under_review;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your submissions and profile</p>
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
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Submissions</h2>
          </div>

          <div className="space-y-4">
            {submissions.map((submission, index) => (
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
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(submission.status)}`}>
                        {submission.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {submission.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Submitted: {submission.submittedDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>{submission.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>{submission.downloads} downloads</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        <FileText className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      {submission.status === 'revision_required' && (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                          <Edit className="w-4 h-4" />
                          <span>Submit Revision</span>
                        </button>
                      )}
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                        <Download className="w-4 h-4" />
                        <span>Download Files</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <p className="text-gray-900 font-medium">Dr. John Smith</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-900">john.smith@university.edu</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Affiliation</label>
                <p className="text-gray-900">University of Technology</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">ORCID</label>
                <p className="text-gray-900">0000-0001-2345-6789</p>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Notifications</h3>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 font-medium">Your submission has been reviewed</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

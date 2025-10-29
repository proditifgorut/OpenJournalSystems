import React from 'react';
import { Calendar, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const IssuesArchive: React.FC = () => {
  const issues = [
    {
      volume: 15,
      number: 1,
      year: 2025,
      month: 'January-March',
      coverImage: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/3b82f6/ffffff?text=Vol+15+No+1',
      articleCount: 24,
      published: '2025-01-15',
    },
    {
      volume: 14,
      number: 4,
      year: 2024,
      month: 'October-December',
      coverImage: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/8b5cf6/ffffff?text=Vol+14+No+4',
      articleCount: 28,
      published: '2024-10-15',
    },
    {
      volume: 14,
      number: 3,
      year: 2024,
      month: 'July-September',
      coverImage: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/ec4899/ffffff?text=Vol+14+No+3',
      articleCount: 26,
      published: '2024-07-15',
    },
    {
      volume: 14,
      number: 2,
      year: 2024,
      month: 'April-June',
      coverImage: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x500/10b981/ffffff?text=Vol+14+No+2',
      articleCount: 22,
      published: '2024-04-15',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Issues Archive</h1>
          <p className="text-lg text-gray-600">Browse our published journal issues</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 flex items-start space-x-4">
          <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Current Issue</h3>
            <p className="text-blue-800">
              Volume 15, Issue 1 (January-March 2025) is now available with 24 new research articles.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {issues.map((issue, index) => (
            <motion.div
              key={`${issue.volume}-${issue.number}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={issue.coverImage}
                  alt={`Volume ${issue.volume} Issue ${issue.number}`}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Latest
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{issue.month} {issue.year}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Volume {issue.volume}, Issue {issue.number}
                </h3>

                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <FileText className="w-4 h-4" />
                  <span>{issue.articleCount} Articles</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Published: {issue.published}
                </p>

                <div className="flex flex-col space-y-2">
                  <Link
                    to="/browse"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium text-sm"
                  >
                    View Articles
                  </Link>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                    <Download className="w-4 h-4" />
                    <span>Download Issue</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  page === 1
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuesArchive;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, Quote, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateMockArticles } from '../utils/mockData';

const BrowseArticles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  
  const articles = generateMockArticles(12);
  const sections = ['All Sections', 'Computer Science', 'Engineering', 'Medicine', 'Physics', 'Biology'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Articles</h1>
          <p className="text-lg text-gray-600">Explore our collection of peer-reviewed research papers</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by title, author, keywords, or DOI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {sections.map((section) => (
                  <option key={section} value={section.toLowerCase()}>
                    {section}
                  </option>
                ))}
              </select>
              <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="recent">Most Recent</option>
                <option value="citations">Most Cited</option>
                <option value="views">Most Viewed</option>
                <option value="downloads">Most Downloaded</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{articles.length}</span> articles
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.sections.map((section) => (
                      <span
                        key={section}
                        className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {section}
                      </span>
                    ))}
                  </div>

                  <Link to={`/article/${article.id}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                  </Link>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Published: {article.publishedDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4" />
                      <span>DOI: {article.doi}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 font-medium mb-2">
                    {article.authors.map((a) => a.name).join(', ')}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {article.authors[0].affiliation}
                  </p>

                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {article.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.keywords.slice(0, 5).map((keyword) => (
                      <span
                        key={keyword}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{article.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Quote className="w-4 h-4" />
                      <span>{article.citations.toLocaleString()} citations</span>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-2">
                  <Link
                    to={`/article/${article.id}`}
                    className="flex-1 lg:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium text-sm"
                  >
                    View Article
                  </Link>
                  <button className="flex-1 lg:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium text-sm flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>PDF</span>
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
            {[1, 2, 3, 4, 5].map((page) => (
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

export default BrowseArticles;

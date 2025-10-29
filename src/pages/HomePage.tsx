import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, TrendingUp, FileText, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateMockArticles } from '../utils/mockData';

const HomePage: React.FC = () => {
  const latestArticles = generateMockArticles(3);

  const stats = [
    { label: 'Total Articles', value: '2,847', icon: FileText, color: 'blue' },
    { label: 'Active Reviewers', value: '156', icon: Users, color: 'green' },
    { label: 'Impact Factor', value: '3.82', icon: Award, color: 'purple' },
    { label: 'Avg. Review Time', value: '21 days', icon: TrendingUp, color: 'orange' },
  ];

  const features = [
    {
      title: 'Open Access Publishing',
      description: 'All articles are freely available to readers worldwide, maximizing visibility and impact.',
      icon: BookOpen,
    },
    {
      title: 'Rigorous Peer Review',
      description: 'Double-blind peer review process ensures quality and credibility of published research.',
      icon: Users,
    },
    {
      title: 'Fast Publication',
      description: 'Efficient editorial workflow with average review time of 21 days from submission.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Advancing Knowledge Through Open Science
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                A peer-reviewed, open-access journal publishing cutting-edge research across multiple disciplines
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/browse"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Search className="w-5 h-5" />
                  <span>Browse Articles</span>
                </Link>
                <Link
                  to="/submit"
                  className="bg-blue-500 bg-opacity-20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Submit Article</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Publish With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of researchers who trust our platform for their scholarly publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest Articles</h2>
              <p className="text-gray-600">Recently published research papers</p>
            </div>
            <Link
              to="/browse"
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/article/${article.id}`}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {article.sections[0]}
                      </span>
                      <span className="text-sm text-gray-500">{article.publishedDate}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow text-sm leading-relaxed">
                      {article.abstract}
                    </p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <p className="text-sm text-gray-700 font-medium mb-2">
                        {article.authors[0].name}
                        {article.authors.length > 1 && ` et al.`}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.views.toLocaleString()} views</span>
                        <span>{article.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/browse"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Share Your Research?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of researchers and contribute to the advancement of knowledge
          </p>
          <Link
            to="/submit"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            <FileText className="w-5 h-5" />
            <span>Submit Your Manuscript</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

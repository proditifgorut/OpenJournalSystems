import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Eye, Quote, Share2, Mail, Bookmark, Calendar, Tag, User, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateMockArticles } from '../utils/mockData';

const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'abstract' | 'full-text' | 'references' | 'metrics'>('abstract');
  
  const article = generateMockArticles(1)[0];
  const relatedArticles = generateMockArticles(3);

  const tabs = [
    { id: 'abstract' as const, label: 'Abstract' },
    { id: 'full-text' as const, label: 'Full Text' },
    { id: 'references' as const, label: 'References' },
    { id: 'metrics' as const, label: 'Metrics' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/browse" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Browse
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.sections.map((section) => (
                  <span
                    key={section}
                    className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full"
                  >
                    {section}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="space-y-4 mb-6">
                {article.authors.map((author, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {author.name}
                        {author.isCorresponding && (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            Corresponding
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-600">{author.affiliation}</p>
                      <p className="text-sm text-gray-500">{author.email}</p>
                      {author.orcid && (
                        <a
                          href={`https://orcid.org/${author.orcid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1 mt-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>ORCID: {author.orcid}</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 mb-1">Published</p>
                    <p className="font-semibold text-gray-900">{article.publishedDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">DOI</p>
                    <p className="font-semibold text-blue-600">{article.doi}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Volume/Issue</p>
                    <p className="font-semibold text-gray-900">
                      Vol. {article.volume}, Issue {article.issue}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Pages</p>
                    <p className="font-semibold text-gray-900">{article.pages}</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-1 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 font-medium border-b-2 transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {activeTab === 'abstract' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{article.abstract}</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'full-text' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Text</h2>
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This research presents a comprehensive analysis of the current state and future directions in the field. 
                          Our study builds upon previous work while introducing novel methodologies and frameworks that address 
                          existing gaps in the literature.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">2. Methodology</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We employed a mixed-methods approach combining quantitative analysis with qualitative assessments. 
                          Data was collected from multiple sources and analyzed using state-of-the-art statistical techniques.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">3. Results</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our findings demonstrate significant improvements over existing approaches, with measurable impacts 
                          across all evaluated metrics. Detailed analysis reveals interesting patterns and correlations.
                        </p>
                      </section>
                      <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">4. Conclusion</h3>
                        <p className="text-gray-700 leading-relaxed">
                          This work contributes to the field by providing new insights and practical applications. 
                          Future research directions include expanding the scope and validating results in different contexts.
                        </p>
                      </section>
                    </div>
                  </div>
                )}

                {activeTab === 'references' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
                    <ol className="space-y-3 list-decimal list-inside">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <li key={i} className="text-gray-700 text-sm leading-relaxed">
                          Author A, Author B. (2024). Title of Referenced Work. Journal Name, 
                          Vol. {10 + i}, Issue {i + 1}, pp. {100 + i * 10}-{120 + i * 10}.
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Article Metrics</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <Eye className="w-8 h-8 text-blue-600 mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {article.views.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Total Views</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <Download className="w-8 h-8 text-green-600 mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {article.downloads.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Downloads</p>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <Quote className="w-8 h-8 text-purple-600 mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {article.citations.toLocaleString()}
                        </div>
                        <p className="text-gray-600">Citations</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    <Quote className="w-5 h-5" />
                    <span>Cite Article</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    <Bookmark className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Article Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>Views</span>
                    </span>
                    <span className="font-semibold text-gray-900">{article.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Downloads</span>
                    </span>
                    <span className="font-semibold text-gray-900">{article.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 flex items-center space-x-2">
                      <Quote className="w-4 h-4" />
                      <span>Citations</span>
                    </span>
                    <span className="font-semibold text-gray-900">{article.citations.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/article/${related.id}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-600">{related.authors[0].name}</p>
                      <p className="text-xs text-gray-500">{related.publishedDate}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

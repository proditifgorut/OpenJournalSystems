import React from 'react';
import { Target, Users, Award, TrendingUp, Mail, BookOpen } from 'lucide-react';

const AboutJournal: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To advance scientific knowledge by providing a platform for researchers to share their groundbreaking work with the global community.',
    },
    {
      icon: Users,
      title: 'Expert Review',
      description: 'All submissions undergo rigorous double-blind peer review by leading experts in their respective fields.',
    },
    {
      icon: Award,
      title: 'High Impact',
      description: 'Our journal maintains a strong impact factor and is indexed in major academic databases worldwide.',
    },
    {
      icon: TrendingUp,
      title: 'Open Access',
      description: 'We believe in making research freely available to maximize its impact and accelerate scientific progress.',
    },
  ];

  const editorialBoard = [
    { name: 'Dr. Sarah Johnson', role: 'Editor-in-Chief', affiliation: 'MIT' },
    { name: 'Dr. Michael Chen', role: 'Associate Editor', affiliation: 'Stanford University' },
    { name: 'Dr. Emily Williams', role: 'Managing Editor', affiliation: 'Oxford University' },
    { name: 'Dr. David Brown', role: 'Section Editor', affiliation: 'Cambridge University' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Journal</h1>
            <p className="text-xl text-blue-100">
              A leading platform for publishing high-quality research across multiple disciplines
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The Journal of Advanced Research was established in 2010 with a vision to create a premier platform for 
                disseminating cutting-edge research across multiple scientific disciplines. Over the past decade, we have 
                grown to become one of the most respected open-access journals in the academic community.
              </p>
              <p>
                Our commitment to excellence in peer review, rapid publication, and open access has attracted thousands 
                of submissions from researchers worldwide. We take pride in our rigorous editorial process that ensures 
                only the highest quality research is published while maintaining a fast turnaround time.
              </p>
              <p>
                With an impact factor of 3.82 and indexing in major databases including Web of Science, Scopus, and 
                PubMed, we continue to be a trusted choice for researchers looking to share their work with the global 
                scientific community.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Publish With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Editorial Board</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {editorialBoard.map((member, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-gray-600">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Scope & Coverage</h3>
            <div className="space-y-3">
              {['Computer Science & AI', 'Engineering & Technology', 'Medicine & Healthcare', 'Physics & Mathematics', 'Biology & Life Sciences', 'Chemistry & Materials'].map((scope, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{scope}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl shadow-sm p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Editorial Office</p>
                <p className="text-blue-100">editor@journaladvresearch.org</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Publisher</p>
                <p className="text-blue-100">publisher@journaladvresearch.org</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Technical Support</p>
                <p className="text-blue-100">support@journaladvresearch.org</p>
              </div>
              <div className="pt-4 border-t border-blue-400">
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJournal;

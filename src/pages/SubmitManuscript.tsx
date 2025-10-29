import React, { useState } from 'react';
import { Upload, Plus, X, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SubmitManuscript: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: [''],
    section: '',
    authors: [{ name: '', email: '', affiliation: '', orcid: '', isCorresponding: true }],
  });
  const [files, setFiles] = useState<{ type: string; name: string }[]>([]);

  const steps = [
    { number: 1, title: 'Article Details', description: 'Basic information' },
    { number: 2, title: 'Authors', description: 'Author information' },
    { number: 3, title: 'Upload Files', description: 'Manuscript & supplements' },
    { number: 4, title: 'Review', description: 'Final review' },
  ];

  const sections = [
    'Computer Science',
    'Engineering',
    'Medicine',
    'Physics',
    'Biology',
    'Chemistry',
  ];

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: '', email: '', affiliation: '', orcid: '', isCorresponding: false }],
    });
  };

  const removeAuthor = (index: number) => {
    const newAuthors = formData.authors.filter((_, i) => i !== index);
    setFormData({ ...formData, authors: newAuthors });
  };

  const addKeyword = () => {
    setFormData({ ...formData, keywords: [...formData.keywords, ''] });
  };

  const removeKeyword = (index: number) => {
    const newKeywords = formData.keywords.filter((_, i) => i !== index);
    setFormData({ ...formData, keywords: newKeywords });
  };

  const handleFileUpload = (type: string) => {
    setFiles([...files, { type, name: `${type}_${Date.now()}.pdf` }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Submit Manuscript</h1>
          <p className="text-lg text-gray-600">Follow the steps below to submit your research article</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                      currentStep >= step.number
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="text-center mt-2">
                    <p className="font-semibold text-sm text-gray-900">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 transition-colors ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Article Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your article title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Abstract <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your abstract (max 300 words)"
                  />
                  <p className="text-sm text-gray-500 mt-1">Word count: 0 / 300</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Section <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a section</option>
                    {sections.map((section) => (
                      <option key={section} value={section}>
                        {section}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Keywords <span className="text-red-500">*</span>
                    </label>
                    <button
                      onClick={addKeyword}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Keyword</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.keywords.map((keyword, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={keyword}
                          onChange={(e) => {
                            const newKeywords = [...formData.keywords];
                            newKeywords[index] = e.target.value;
                            setFormData({ ...formData, keywords: newKeywords });
                          }}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={`Keyword ${index + 1}`}
                        />
                        {formData.keywords.length > 1 && (
                          <button
                            onClick={() => removeKeyword(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900">Author Information</h3>
                  <button
                    onClick={addAuthor}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Author</span>
                  </button>
                </div>

                {formData.authors.map((author, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 space-y-4 relative"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-gray-900">Author {index + 1}</h4>
                      {index > 0 && (
                        <button
                          onClick={() => removeAuthor(index)}
                          className="text-red-600 hover:bg-red-50 p-1 rounded transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={author.name}
                          onChange={(e) => {
                            const newAuthors = [...formData.authors];
                            newAuthors[index].name = e.target.value;
                            setFormData({ ...formData, authors: newAuthors });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={author.email}
                          onChange={(e) => {
                            const newAuthors = [...formData.authors];
                            newAuthors[index].email = e.target.value;
                            setFormData({ ...formData, authors: newAuthors });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Affiliation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={author.affiliation}
                          onChange={(e) => {
                            const newAuthors = [...formData.authors];
                            newAuthors[index].affiliation = e.target.value;
                            setFormData({ ...formData, authors: newAuthors });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ORCID (optional)
                        </label>
                        <input
                          type="text"
                          value={author.orcid}
                          onChange={(e) => {
                            const newAuthors = [...formData.authors];
                            newAuthors[index].orcid = e.target.value;
                            setFormData({ ...formData, authors: newAuthors });
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0000-0000-0000-0000"
                        />
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={author.isCorresponding}
                          onChange={(e) => {
                            const newAuthors = formData.authors.map((a, i) => ({
                              ...a,
                              isCorresponding: i === index ? e.target.checked : false,
                            }));
                            setFormData({ ...formData, authors: newAuthors });
                          }}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          Corresponding Author
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">File Upload Guidelines:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Manuscript must be in PDF or DOCX format</li>
                      <li>Maximum file size: 10 MB per file</li>
                      <li>Supplementary files are optional</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Manuscript File <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PDF or DOCX (max. 10MB)</p>
                      <button
                        onClick={() => handleFileUpload('manuscript')}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Select File
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Cover Letter (optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload cover letter</p>
                      <button
                        onClick={() => handleFileUpload('cover_letter')}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        Choose File
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Supplementary Files (optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                      <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload additional files</p>
                      <button
                        onClick={() => handleFileUpload('supplementary')}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        Choose Files
                      </button>
                    </div>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Uploaded Files</h4>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{file.name}</p>
                              <p className="text-xs text-gray-500 capitalize">{file.type.replace('_', ' ')}</p>
                            </div>
                          </div>
                          <button className="text-red-600 hover:bg-red-50 p-1 rounded transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-800">
                    <p className="font-semibold mb-1">Ready to Submit!</p>
                    <p>Please review your submission details before finalizing.</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Article Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-600">Title</dt>
                      <dd className="text-gray-900 mt-1">{formData.title || 'Not provided'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-600">Section</dt>
                      <dd className="text-gray-900 mt-1">{formData.section || 'Not selected'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-600">Keywords</dt>
                      <dd className="flex flex-wrap gap-2 mt-1">
                        {formData.keywords.filter(k => k).map((keyword, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {keyword}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Authors ({formData.authors.length})</h3>
                  <div className="space-y-3">
                    {formData.authors.map((author, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-semibold">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {author.name || 'Not provided'}
                            {author.isCorresponding && (
                              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                Corresponding
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-gray-600">{author.affiliation || 'Not provided'}</p>
                          <p className="text-sm text-gray-500">{author.email || 'Not provided'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Uploaded Files ({files.length})</h3>
                  {files.length > 0 ? (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{file.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{file.type.replace('_', ' ')}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No files uploaded</p>
                  )}
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                    />
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-2">Declaration and Agreement</p>
                      <p className="leading-relaxed">
                        I confirm that this manuscript has not been published elsewhere and is not under
                        consideration by another journal. All authors have approved the manuscript and agree
                        with its submission to this journal. I understand that the corresponding author is
                        responsible for all communications during the submission and review process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Submit Manuscript</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitManuscript;

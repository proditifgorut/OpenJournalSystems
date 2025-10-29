export type UserRole = 'guest' | 'author' | 'reviewer' | 'editor' | 'admin';

export type SubmissionStatus = 
  | 'draft' 
  | 'submitted' 
  | 'under_review' 
  | 'revision_required' 
  | 'accepted' 
  | 'rejected' 
  | 'published';

export interface Article {
  id: string;
  title: string;
  abstract: string;
  authors: Author[];
  keywords: string[];
  doi: string;
  submittedDate: string;
  publishedDate?: string;
  volume?: number;
  issue?: number;
  pages?: string;
  status: SubmissionStatus;
  views: number;
  downloads: number;
  citations: number;
  pdfUrl?: string;
  sections: string[];
}

export interface Author {
  name: string;
  affiliation: string;
  email: string;
  orcid?: string;
  isCorresponding?: boolean;
}

export interface Submission {
  id: string;
  title: string;
  abstract: string;
  authors: Author[];
  keywords: string[];
  section: string;
  status: SubmissionStatus;
  submittedDate: string;
  files: FileUpload[];
  comments?: string;
  reviewers?: Reviewer[];
}

export interface FileUpload {
  id: string;
  name: string;
  type: 'manuscript' | 'cover_letter' | 'supplementary' | 'revision';
  size: number;
  uploadedDate: string;
}

export interface Reviewer {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  assignedDate: string;
  dueDate: string;
  completedDate?: string;
  recommendation?: 'accept' | 'minor_revision' | 'major_revision' | 'reject';
  comments?: string;
}

export interface Issue {
  id: string;
  volume: number;
  number: number;
  year: number;
  title?: string;
  coverImage?: string;
  publishedDate: string;
  articleCount: number;
  articles: Article[];
}

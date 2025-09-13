export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  lessonsCount: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  completed: boolean;
}

export interface TestResult {
  id: string;
  timestamp: string;
  status: 'running' | 'success' | 'error';
  message: string;
  details?: string[];
}
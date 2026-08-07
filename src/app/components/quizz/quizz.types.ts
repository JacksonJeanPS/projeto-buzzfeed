export interface QuizzOption {
  id: number;
  name: string;
  alias: string;
}

export interface QuizzQuestion {
  id: number;
  question: string;
  options: QuizzOption[];
}

export interface QuizzResults {
  A: string;
  B: string;
}

export interface QuizzData {
  title: string;
  questions: QuizzQuestion[];
  results: QuizzResults;
}

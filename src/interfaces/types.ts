export interface IQuiz {
  author: string;
  _id: string;
  question: string;
  answer: string;
  topic: string;
  created: Date;
}

export interface IQuizForm {
  author?: string;
  question: string;
  answer: string;
  topic: string;
}

export interface IQuizFn extends IQuiz {
  quizDelete: () => void;
  showAnswer: string;
  revealAnswer: () => void;
}
export interface IQuizDelete {
  deleteQuiz: () => void;
}

export interface IModal {
  show: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

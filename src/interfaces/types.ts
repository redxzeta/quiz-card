export interface IQuiz {
    author: string;
    _id: string;
    question: string;
    answer: string;
    topic: string;
    created: Date;
  
  }
  
  export interface IQuizFn extends IQuiz{
    quizDelete : ()=>void;
    showAnswer : string,
    revealAnswer : ()=>void;

  }
  export interface IQuizDelete {
      deleteQuiz: ()=>void;
  }
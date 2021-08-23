import { IQuiz, IQuizForm } from "../interfaces/types";

export const quizInitialState: IQuizState = {
  quizList: [],
  newQuiz: { question: "", answer: "", topic: "" },
  prevQuizList: [],
};

interface IQuizState {
  quizList: IQuiz[];
  newQuiz: IQuizForm;
  prevQuizList: IQuiz[];
}

type QuizAction =
  | { type: "FETCH"; payload: IQuiz[] }
  | { type: "ADD"; payload: IQuiz }
  | { type: "UPDATE"; id: string; payload: IQuiz }
  | { type: "DELETE"; id: string }
  | { type: "UNDO" };

export const quizReducer = (state: IQuizState, action: QuizAction) => {
  switch (action.type) {
    case "ADD":
      const prevList = state.quizList;
      return {
        ...state,
        quizList: [...state.quizList, action.payload],
        prevQuizList: prevList,
      };
    case "FETCH":
      return {
        ...state,
        quizList: action.payload,
        prevQuizList: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        prevQuizList: state.quizList,
        quizList: state.quizList.filter((q: IQuiz) => q._id !== action.id),
      };
    case "UNDO":
      return {
        ...state,
        quizList: state.prevQuizList,
      };
    case "UPDATE":
      return {
        ...state,
        quizList: state.quizList.map((q: IQuiz) =>
          q._id === action.id ? action.payload : q
        ),
      };
    default:
      return state;
  }
};

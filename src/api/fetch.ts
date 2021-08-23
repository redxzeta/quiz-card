import { IQuiz, IQuizForm } from "../interfaces/types";

const quizApi = process.env.REACT_APP_EXPRESS;

export const deleteQuizById = (id: string) =>
  fetch(`${quizApi}/${id}`, { method: "DELETE" });

export const getAllQuizzes = () => fetch(`${quizApi}`);

export const postNewQuiz = (quiz: IQuizForm) =>
  fetch(`${quizApi}`, {
    method: "POST",
    body: JSON.stringify(quiz),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const updateQuiz = (quiz: IQuiz, id: string) =>
  fetch(`${quizApi}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(quiz),
    headers: {
      "Content-Type": "application/json",
    },
  });

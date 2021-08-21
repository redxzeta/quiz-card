import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { deleteQuizById, getAllQuizzes, postNewQuiz } from "./api/fetch";
import NewQuiz from "./components/NewQuiz";
import QuizCard from "./components/QuizCard";
import { IQuiz, IQuizForm } from "./interfaces/types";
const sampleData = {
  question: "WOAHO",
  answer: "NOssf",
  topic: "test",
  author: "Carl",
};
function App() {
  const [quiz, setQuiz] = useState<IQuiz[] | []>([]);
  const [showAnswer, setShowAnswer] = useState("false");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllQuizzes();
      const data = await response.json();
      setQuiz(data);
    };
    fetchData();
  }, []);

  const deleteQuiz = async (id: string) => {
    const response = await deleteQuizById(id);
    const data = await response.json();
    console.log(data);
    const quizList = quiz.filter((q: IQuiz) => q._id !== id);
    setQuiz(quizList);
  };
  const revealAnswer = (id: string) => {
    if (id === showAnswer) {
      setShowAnswer("false");
    } else {
      setShowAnswer(id);
    }
  };
  const postQuiz = async (newQuiz: IQuizForm) => {
    const response = await postNewQuiz(newQuiz);
    const data: IQuiz = await response.json();
    const result: IQuiz[] = [...quiz, data];

    setQuiz(result);
  };
  return (
    <main>
      <Container>
        <h1>Fun Quiz Time</h1>
        <Button variant="outline-info" onClick={handleShow}>
          Add Quiz
        </Button>
        <Button variant="outline-warning" onClick={() => postQuiz(sampleData)}>
          Test
        </Button>
        <NewQuiz
          show={show}
          handleClose={handleClose}
          handleOpen={handleShow}
        />
        {quiz.map((q: IQuiz) => (
          <QuizCard
            key={q._id}
            created={q.created}
            answer={q.answer}
            author={q.author}
            _id={q._id}
            question={q.question}
            topic={q.topic}
            showAnswer={showAnswer}
            revealAnswer={() => revealAnswer(q._id)}
            quizDelete={() => deleteQuiz(q._id)}
          />
        ))}
      </Container>
    </main>
  );
}

export default App;

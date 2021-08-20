import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import QuizCard from "./components/QuizCard";
import { IQuiz } from "./interfaces/types";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [showAnswer, setShowAnswer] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_EXPRESS}`);
      const data = await response.json();
      setQuiz(data);
    };
    fetchData();
  }, []);

  const deleteQuiz = async (id: string) => {
    const response = await fetch(`${process.env.REACT_APP_EXPRESS}/${id}`, {
      method: "DELETE",
    });
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
  return (
    <main>
      <Container>
        <h1>Fun Quiz Time</h1>

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

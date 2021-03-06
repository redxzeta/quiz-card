import { useEffect, useReducer, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { deleteQuizById, getAllQuizzes } from "./api/fetch";
import NewQuiz from "./components/NewQuiz";
import QuizCard from "./components/QuizCard";
import { IQuiz } from "./interfaces/types";
import { quizInitialState, quizReducer } from "./reducers/quizReducer";

function App() {
  const [showAnswer, setShowAnswer] = useState("false");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllQuizzes();
      const data = await response.json();
      dispatch({ type: "FETCH", payload: data });
    };
    fetchData();
  }, []);

  const deleteQuiz = async (id: string) => {
    const response = await deleteQuizById(id);
    const data = await response.json();
    console.log(data);
    dispatch({ type: "DELETE", id: id });
  };
  const revealAnswer = (id: string) => {
    if (id === showAnswer) {
      setShowAnswer("false");
    } else {
      setShowAnswer(id);
    }
  };
  const addNewQuiz = (data: IQuiz) => dispatch({ type: "ADD", payload: data });
  const [state, dispatch] = useReducer(quizReducer, quizInitialState);
  return (
    <main>
      <Container>
        <h1>Fun Quiz Time</h1>
        <Button variant="outline-info" onClick={handleShow}>
          Add Quiz
        </Button>

        <NewQuiz
          show={show}
          handleClose={handleClose}
          handleOpen={handleShow}
          addQuiz={(data) => addNewQuiz(data)}
        />
        <Row>
          {state.quizList.map((q: IQuiz) => (
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
        </Row>
      </Container>
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import QuizCard from "./components/QuizCard";

function App() {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_EXPRESS}`);
      const data = await response.json();
      setQuiz(data);
    };
    fetchData();
  }, []);
  console.log(quiz);
  return (
    <main>
      <Container>
        <h1>TEST</h1>
        <QuizCard />
      </Container>
    </main>
  );
}

export default App;

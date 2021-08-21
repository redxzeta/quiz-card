import { Button, Card } from "react-bootstrap";
import { IQuizFn } from "../interfaces/types";

const QuizCard: React.FC<IQuizFn> = (props) => {
  const value =
    props._id === props.showAnswer ? props.answer : "Click on Answer";
  return (
    <Card>
      <Card.Header>{props.topic}</Card.Header>
      <Card.Body>
        <Card.Title>{props.question}</Card.Title>

        <Card.Text>{value}</Card.Text>

        <Button variant="outline-primary" onClick={props.revealAnswer}>
          Answer
        </Button>
        <Button variant="outline-danger" onClick={props.quizDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default QuizCard;

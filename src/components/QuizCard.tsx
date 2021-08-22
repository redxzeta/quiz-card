import { Button, Card, Col } from "react-bootstrap";
import { IQuizFn } from "../interfaces/types";

const QuizCard: React.FC<IQuizFn> = (props) => {
  const value =
    props._id === props.showAnswer ? props.answer : "Click on Answer";
  return (
    <Col xs={12} md={6}>
      <Card>
        <Card.Header>Topic: {props.topic}</Card.Header>
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
        <Card.Footer>
          <small className="text-muted">By: {props.author} </small>
          <small className="ml-auto text-muted">Created: {props.created}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default QuizCard;

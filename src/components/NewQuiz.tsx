import { Button, Form } from "react-bootstrap";

const NewQuiz = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewQuiz;

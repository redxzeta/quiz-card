import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { postNewQuiz } from "../api/fetch";
import { IModal, IQuiz, IQuizForm } from "../interfaces/types";

const initForm: IQuizForm = {
  question: "",
  answer: "",
  topic: "",
};

type FieldType = {
  field: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userValue: string;
};

const NewQuiz: React.FC<IModal> = (props) => {
  const [newQuiz, setNewQuiz] = useState(initForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewQuiz({ ...newQuiz, [e.target.name]: e.target.value });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postNewQuiz(newQuiz);
      const data: IQuiz = await response.json();
      props.addQuiz(data);
    } catch (error) {
      console.log(error.message);
    }
    setNewQuiz(initForm);
    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Quiz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <FieldForm
            onChange={onChange}
            field="question"
            userValue={newQuiz.question}
          />
          <FieldForm
            onChange={onChange}
            field="answer"
            userValue={newQuiz.answer}
          />
          <FieldForm
            onChange={onChange}
            field="topic"
            userValue={newQuiz.topic}
          />
          <FieldForm
            onChange={onChange}
            field="author"
            userValue={newQuiz.author || ""}
          />
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewQuiz;

const FieldForm = (props: FieldType) => (
  <Form.Group className="mb-3" controlId="formBasicAuthor">
    <Form.Label>{props.field}</Form.Label>
    <Form.Control
      name={props.field}
      type="text"
      placeholder={`Enter ${props.field} here`}
      value={props.userValue}
      onChange={props.onChange}
    />
  </Form.Group>
);

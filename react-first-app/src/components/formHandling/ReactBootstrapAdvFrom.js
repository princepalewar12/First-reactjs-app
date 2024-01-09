import React, { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";

const ReactBootstrapAdvFrom = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    color: "",
    date: "",
    range: "20",
    options: "",
    file: null,
    radioOption: "",
  });

  const handleFormData = (e) => {
    alert(`Form Submitted`);
    console.log("Inside handleFormData", form);
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <Container>
      <h1 className="mt-3">Advance React Form Handling with Bootstrap</h1>

      <Form onSubmit={handleFormData}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="color">
          <Form.Label>Colors:</Form.Label>
          <Form.Control
            type="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="range">
          <Form.Label>Range:</Form.Label>
          <Form.Control
            type="range"
            name="range"
            value={form.range}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="options">
          <Form.Label>Options:</Form.Label>
          <Form.Control
            as="select"
            name="options"
            value={form.options}
            onChange={handleChange}
            required
          >
            <option value="">Please Select The Options</option>
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="bootstrap">BootStrap</option>
            <option value="javascript">JavaScript</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="file">
          <Form.Label>File Upload:</Form.Label>
          <Form.Control type="file" name="file" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="radioOptions">
          <Form.Label>Choose an option:</Form.Label>
          <Form.Check
            type="radio"
            label="Option 1"
            name="radioOption"
            value="option1"
            checked={form.radioOption === "option1"}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="radioOption"
            value="option2"
            checked={form.radioOption === "option2"}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ReactBootstrapAdvFrom;

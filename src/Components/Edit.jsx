import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { FloatingLabel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Edit() {
  let params = useParams();
  return (
    <Form className="container mt-3 mb-3" style={{ maxWidth: "780px" }}>
      <h1 className="text-xl font-bold underline">Book Details</h1>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Book Title" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formISBN">
          <Form.Label>ISBN</Form.Label>
          <Form.Control type="number" placeholder="ISBN number" />
        </Form.Group>
        <Form.Group as={Col} controlId="formPublished">
          <Form.Label>Published</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formImg">
        <Form.Label>Book Cover Image</Form.Label>
        <Form.Control type="url" placeholder="Enter image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAbout">
        <Form.Label>About</Form.Label>
        <Form.Control as="textarea" placeholder="Enter about book" rows={3} />
      </Form.Group>
      <h1 className="text-xl font-bold underline">Author Details</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formISBN">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" placeholder="ISBN number" />
        </Form.Group>
        <Form.Group as={Col} controlId="formPublished">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formAuthorName">
        <Form.Label>Author Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter author name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBio">
        <Form.Label>Biography</Form.Label>
        <Form.Control as="textarea" placeholder="Enter biography" rows={3} />
      </Form.Group>

      <Button className="btn bg-blue-900" type="submit">
        Submit
      </Button>
      <Link
        to={`/dashboard`}
        className="btn bg-yellow-500 hover:bg-yellow-300 ml-5"
      >
      Back to Dashboard
      </Link>
    </Form>
  );
}

export default Edit;

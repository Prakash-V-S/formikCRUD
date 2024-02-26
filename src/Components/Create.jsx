import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import * as Yup from "yup";

function Create() {
  
 let formik=useFormik({
    initialValues:initialValuesMap,
    validationSchema: Yup.object({
      book:Yup.object({
        title:Yup.string().required('Title is Required'),
        author:Yup.string().required('Author Name is Required'),
        ISBN:Yup.string().required('ISBN Number is required').matches(/^\d{6}$/, 'Enter a valid ISBN Number'),
        pub:Yup.date().required('Date is Required')
      }),
      auther:Yup.object({
        name:Yup.string().required("Authors name is required"),
        birth:Yup.string().required('BirthDate is Required'),
        bio:Yup.string().required('Biography is required')
      })
    }),
    enableReinitialize:true,})

  return (
    <Form
      className="container mt-3 mb-3"
      style={{ maxWidth: "780px" }}
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-xl font-bold underline">Book Details</h1>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Book Title"
          {...formik.getFieldProps("title")}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-danger">{formik.errors.title}</div>
        ) : null}
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formISBN">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN number"
            {...formik.getFieldProps("ISBN")}
          />
          {formik.touched.ISBN && formik.errors.ISBN ? (
            <div className="text-danger">{formik.errors.ISBN}</div>
          ) : null}
        </Form.Group>
        <Form.Group as={Col} controlId="formPublished">
          <Form.Label>Published</Form.Label>
          <Form.Control type="date" {...formik.getFieldProps("pub")} />
          {formik.touched.pub && formik.errors.pub ? (
            <div className="text-danger">{formik.errors.pub}</div>
          ) : null}
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formImg">
        <Form.Label>Book Cover Image</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter image URL"
          {...formik.getFieldProps("img")}
        />
        {formik.touched.img && formik.errors.img ? (
          <div className="text-danger">{formik.errors.img}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAbout">
        <Form.Label>About</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter about book"
          rows={3}
          {...formik.getFieldProps("about")}
        />
        {formik.touched.about && formik.errors.about ? (
          <div className="text-danger">{formik.errors.about}</div>
        ) : null}
      </Form.Group>
      <h1 className="text-xl font-bold underline">Author Details</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formAuthorName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            {...formik.getFieldProps("author.name")}
          />
          {formik.touched.author?.name && formik.errors.author?.name ? (
            <div className="text-danger">{formik.errors.author.name}</div>
          ) : null}
        </Form.Group>
        <Form.Group as={Col} controlId="formAuthorBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" {...formik.getFieldProps("author.birth")} />
          {formik.touched.author?.birth && formik.errors.author?.birth ? (
            <div className="text-danger">{formik.errors.author.birth}</div>
          ) : null}
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formAuthorImg">
        <Form.Label>Author Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author image URL"
          {...formik.getFieldProps("author.img")}
        />
        {formik.touched.author?.img && formik.errors.author?.img ? (
          <div className="text-danger">{formik.errors.author.img}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBio">
        <Form.Label>Biography</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter biography"
          rows={3}
          {...formik.getFieldProps("author.bio")}
        />
        {formik.touched.author?.bio && formik.errors.author?.bio ? (
          <div className="text-danger">{formik.errors.author.bio}</div>
        ) : null}
      </Form.Group>

      <Button className="btn bg-blue-900" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Create;

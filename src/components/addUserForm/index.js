import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createUsersStart } from "../../redux/actions/users";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialState = {
  id: uuidv4(),
  name: "",
  username: "",
  email: "",
  address: "",
  city: "",
  zipcode: "",
  phone: "",
  website: "",
  company: "",
};

const AddEditUserForm = () => {
  const [formValue, setFormValue] = useState(initialState);
  const dispatch = useDispatch();
  const {
    name,
    username,
    email,
    address,
    city,
    zipcode,
    phone,
    website,
    company,
  } = formValue;

  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formValue, "submit");
    dispatch(createUsersStart(formValue));
    const notify = () => toast("User Added");
    notify();
    setTimeout(() => navigate("/userlist", { replace: false }), 800);
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="w-75 mx-auto my-4">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
      <Form onSubmit={handelSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              name="name"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              name="username"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              name="email"
              onChange={onInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              name="address"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={city}
              name="city"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              value={zipcode}
              name="zipcode"
              onChange={onInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              name="phone"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              value={website}
              name="website"
              onChange={onInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              value={company}
              name="company"
              onChange={onInputChange}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddEditUserForm;

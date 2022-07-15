import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Button, Col, Row } from "react-bootstrap";

const initialState = {
  id: uuidv4(),
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    companyName: "",
    catchPhrase: "",
    bs: "",
  },
};

const AddEditUserForm = () => {
  const [formValue, setFormValue] = useState(initialState);
  const {
    name,
    username,
    email,
    street,
    suite,
    city,
    zipcode,
    lat,
    lng,
    phone,
    website,
    companyName,
    catchPhrase,
    bs,
  } = formValue;
  const handelSubmit = () => {};
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  return (
    <div className="w-75 mx-auto my-4">
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
          {/*  <Form.Label>Address</Form.Label> */}
          <Form.Group as={Col}>
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              value={street}
              name="street"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Suite</Form.Label>
            <Form.Control
              type="text"
              value={suite}
              name="suite"
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
          <Form.Label>Geo</Form.Label>
          <Form.Group as={Col}>
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="text"
              value={lat}
              name="lat"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="text"
              value={lng}
              name="lng"
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
          <Form.Label>Company</Form.Label>
          <Form.Group as={Col}>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              value={companyName}
              name="companyName"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>CatchPhrase</Form.Label>
            <Form.Control
              type="text"
              value={catchPhrase}
              name="catchPhrase"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Bs</Form.Label>
            <Form.Control
              type="text"
              value={bs}
              name="bs"
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

import React from "react";
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineLeft } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

const Topfold = () => {
  const [query, setQuery] = "";
  const handelQuery = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  //fn for handel cancel Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {window.location.pathname === "/" ? (
        <div className="row">
          <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                value={query}
                onChange={(e) => handelQuery(e)}
              />
            </Form>
          </div>
          <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6 d-flex justify-content-end">
            <Link to="/addexpenses">
              <Button variant="outline-primary">
                Add
                <IoIosAddCircle className="ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-xl-6 text-left">
              <Link to="/">
                <Button variant="outline-warning" className="ms-auto">
                  <AiOutlineLeft className="me-2" />
                  Back
                </Button>
              </Link>
            </div>
            <div className="col-xl-6 d-flex justify-content-end">
              <Button
                variant="outline-danger"
                className="ms-auto"
                onClick={handleShow}
              >
                Cancel
                <GiCancel className="ms-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Do you want to Quit?</Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="danger" onClick={handleClose}>
              Yes
            </Button>
          </Link>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Topfold;

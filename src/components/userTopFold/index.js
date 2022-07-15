import React from "react";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineLeft } from "react-icons/ai";
import { Button, Form } from "react-bootstrap";

const UsertopFold = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <Link to="/">
            <Button variant="outline-warning" className="ms-auto">
              <AiOutlineLeft className="me-2" />
              Back
            </Button>
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Link to="/adduser">
            <Button variant="outline-primary">
              <IoIosAddCircle className="me-2" />
              Add
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsertopFold;

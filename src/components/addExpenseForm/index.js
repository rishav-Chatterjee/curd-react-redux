import React, { useState } from "react";
import { Form, Button, Dropdown, InputGroup } from "react-bootstrap";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { categories } from "../../constants/expensesDropdown";

const AddExpenseForm = () => {
  const dropdowncategories = categories;
  const dispatch = useDispatch();

  //states
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //functions
  const handelTitle = (e) => {
    //console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handelAmount = (e) => {
    const val = parseInt(e.target.value);
    //   console.log(val);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handelCategory = (dropdowns) => {
    setDropdownOpen(false);
    setCategory(dropdowns);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title === "" || amount === "" || !category) {
      console.log("no data");
      return;
    }
    const data = {
      title: title,
      amount: amount,
      category: category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
  };
  return (
    <div className="w-50 mx-auto my-5">
      <Form>
        <InputGroup className="mb-4">
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
          <Form.Control
            placeholder="Expenditure Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={title}
            onChange={(e) => handelTitle(e)}
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <InputGroup.Text id="basic-addon1">Amount ₹</InputGroup.Text>
          <Form.Control
            placeholder="Enter your amount"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={amount}
            onChange={(e) => handelAmount(e)}
          />
        </InputGroup>
        <Dropdown
          className="mb-4"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            {category ? category.title : "Category"}
          </Dropdown.Toggle>
          {dropdownOpen && (
            <Dropdown.Menu className="border-0">
              {dropdowncategories.map((dropdowns) => (
                <div
                  className="row p-2"
                  key={dropdowns.id}
                  style={{
                    backgroundColor: `${dropdowns.backgroundColor}`,
                  }}
                  onClick={() => handelCategory(dropdowns)}
                >
                  <div className="col-xl-8">{dropdowns.title}</div>
                  <div className="col-xl-4">
                    <img
                      src={dropdowns.icon}
                      alt={dropdowns.title}
                      width={20}
                    />
                  </div>
                </div>
              ))}
            </Dropdown.Menu>
          )}
        </Dropdown>
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-success"
            type="submit"
            onClick={handelSubmit}
          >
            <AiOutlineFileAdd className="me-2" />
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddExpenseForm;

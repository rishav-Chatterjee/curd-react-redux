import moment from "moment";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { deleteExpense } from "../../redux/actions/expenses";

const ExpenseCard = ({ item, notifySucess }) => {
  //console.log(item);
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(deleteExpense(item));
    notifySucess();
  };
  return (
    <div className="w-50 mx-auto mt-3">
      <ListGroup>
        <ListGroup.Item>
          <div className="row">
            <div className="col-xl-2 d-flex justify-content-center align-items-center">
              <img src={item.category.icon} alt={item.title} width={40} />
            </div>
            <div className="col-xl-4 align-items-center">
              <h5>{item.title}</h5>
              <small className="form-text">{time}</small>
            </div>
            <div className="col-xl-4 d-flex justify-content-center align-items-center">
              <h5>₹ {item.amount}</h5>
            </div>
            <div className="col-xl-2 d-flex justify-content-center align-items-center">
              <span onClick={handelDelete}>
                <BsTrash />
              </span>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ExpenseCard;

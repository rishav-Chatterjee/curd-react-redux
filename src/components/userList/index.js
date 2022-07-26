import React, { useEffect } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart, getusersStart } from "../../redux/actions/users";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserList = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.users);
  //console.log(usersList);

  useEffect(() => {
    dispatch(getusersStart());
  }, []);

  const handelDelete = (id) => {
    console.log(id);
    dispatch(deleteUsersStart(id));
    const notify = () => toast("User Deleted!");
    notify();
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
      <Table striped bordered hover className="my-4">
        <thead>
          <tr className="text-center">
            <th>Number</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company</th>
            <th colspan="3">Actions</th>
          </tr>
        </thead>
        {usersList &&
          usersList.map((user, index) => (
            <tbody key={user.id} style={{ fontSize: "14px" }}>
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>{user.company}</td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ fontSize: "14px" }}
                    onClick={() => handelDelete(user.id)}
                  >
                    <RiDeleteBinFill />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default UserList;

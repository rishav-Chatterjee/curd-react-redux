import React, { useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getusersStart } from "../../redux/actions/users";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state.usersallList);
  //console.log(usersList);

  useEffect(() => {
    dispatch(getusersStart());
  }, []);

  const handelDelete = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Table striped bordered hover className="my-4">
        <thead>
          <tr className="text-center">
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
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
                <td>{user.email}</td>
                <td>
                  {user.address.suite} - {user.address.city}
                </td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-outline-warning"
                    style={{ fontSize: "14px" }}
                    to={`/edituser/${user.id}`}
                  >
                    <GrEdit />
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{ fontSize: "14px" }}
                  >
                    <AiFillEye />
                  </button>
                </td>
                <td>
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

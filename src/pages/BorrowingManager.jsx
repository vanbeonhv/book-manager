import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUsers, loadUsers } from "../redux/actions/userActions";

const BorrowingManager = () => {
  const data = useSelector((state) => state.users.data);
  // console.log(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleAdd = () => {
    navigate("/borrowing-manager/add");
  };
  const handleEdit = (id) => {
    navigate("/borrowing-manager/edit/" + id);
  };
  const handleDelete = (id, data) => {
    dispatch(deleteUsers(id, data));
  };

  const newStatus =
    "badge text-bg-warning rounded-pill d-inline text-warning-bold";
  const oldStatus = "badge badge-primary rounded-pill d-inline";
  const damagedStatus = "badge badge-danger rounded-pill d-inline";
  return (
    <div className="">
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary m-10 text-white"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-sm table-hover table-stripped table-bordered align-middle">
          <thead className="table-primary align-middle text-center">
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Book</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data ? (
              data.map((user) => {
                let statusStyle = "";
                // (user.status = "New")
                //   ? (statusStyle = newStatus)
                //   : (user.status = "Old")
                //   ? (statusStyle = oldStatus)
                //   : (statusStyle = damagedStatus);

                return (
                  <tr key={user.id} className="">
                    {/* {console.log(user.id)} */}
                    <td>{user.name}</td>
                    <td>{user.school}</td>
                    <td>{user.book}</td>
                    <td className="text-center">{user.borrow_date}</td>
                    <td className="text-center">{user.return_date}</td>
                    <td className="text-center">
                      <span
                        className={`badge rounded-pill d-inline text-capitalize text-${user.status}-bold text-bg-${user.status} `}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success m-5 text-white"
                        onClick={() => handleEdit(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger m-5"
                        onClick={() => handleDelete(user.id, data)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Data empty</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowingManager;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUsers } from "../redux/actions/userActions";

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
    // dispatch(deletesers(id, data));
  };
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
      <table className="table table-hover table-stripped table-bordered table-responsive-lg align-middle">
        <thead className="table-light align-middle">
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
            data.map((user) => (
              <tr key={user.id} className="">
                <td>{user.name}</td>
                <td>{user.school}</td>
                <td>{user.book}</td>
                <td>{user.borrow_date}</td>
                <td>{user.return_date}</td>
                <td>{user.status}</td>
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
            ))
          ) : (
            <tr>
              <td>Data empty</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowingManager;

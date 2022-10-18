import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUsers, loadBorrow } from "../redux/actions/borrowActions";

const BorrowingManager = () => {
  const data = useSelector((state) => state.borrow.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBorrow());
  }, []);

  const handleAdd = () => {
    navigate("add");
  };
  const handleReturn = (id) => {
    navigate("return/" + id);
  };
  const handleDelete = (id, data) => {
    dispatch(deleteUsers(id, data));
  };

  return (
    <div className="main-content">
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
          <thead className="table-success align-middle text-center">
            <tr>
              <th>Name</th>
              <th>School</th>
              <th>Book</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data ? (
              data.map((user) => {
                return (
                  <tr key={user.id} className="">
                    {/* {console.log(user.id)} */}
                    <td>{user.name}</td>
                    <td>{user.school}</td>
                    <td>{user.book}</td>
                    <td className="text-center">
                      {
                        (user.borrow_date = moment(user.borrow_date).format(
                          "MM/DD/yyyy"
                        ))
                      }
                    </td>
                    <td className="text-center">
                      {user.return_date
                        ? (user.return_date = moment(user.return_date).format(
                            "MM/DD/yyyy"
                          ))
                        : ""}
                    </td>
                    <td className="text-center">
                      <span
                        className={`badge rounded-pill d-inline text-capitalize text-white fw-light text-bg-${user.status} `}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex no-wrap">
                        <button
                          type="button"
                          className="btn btn-secondary m-5 text-white"
                          onClick={() => handleReturn(user.id)}
                        >
                          Return
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger m-5"
                          onClick={() => handleDelete(user.id, data)}
                        >
                          Delete
                        </button>
                      </div>
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

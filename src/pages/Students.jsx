import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooks, loadBooks } from "../redux/actions/bookActions";
import { useNavigate } from "react-router-dom";
import { loadStudents } from "../redux/actions/studentAction";

const Students = () => {
  const data = useSelector((state) => state.student.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadStudents());
  }, []);

  const handleAdd = () => {
    navigate("add");
  };
  const handleEdit = (id) => {
    navigate("edit/" + id);
  };
  const handleDelete = (id, data) => {
    dispatch(deleteBooks(id, data));
  };

  return (
    <div className="">
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary m-10 text-white"
          onClick={handleAdd}
          disabled
        >
          Add
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-sm table-hover table-stripped table-bordered ">
          <thead className="table-secondary align-middle text-center text-capitalize">
            <tr>
              <th>name</th>
              <th>school</th>
              <th>email</th>
              <th>phone number</th>
              <th>city</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider align-middle">
            {data && data.length ? (
              data.map((book) => (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{book.school}</td>
                  <td>{book.email}</td>
                  <td>{book.phone_number}</td>
                  <td className="text-center">{book.city}</td>
                  <td>
                    <div className="d-flex no-wrap">
                      <button
                        type="button"
                        className="btn btn-success m-5 text-white"
                        onClick={() => handleEdit(book.id)}
                        disabled
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger m-5"
                        onClick={() => handleDelete(book.id, data)}
                        disabled
                      >
                        Delete
                      </button>
                    </div>
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
    </div>
  );
};

export default Students;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooks, loadBooks } from "../redux/actions/bookActions";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const data = useSelector((state) => state.books.data);
  const requesting = useSelector((state) => state.books.requesting);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const handleAdd = () => {
    navigate("/books/add");
  };
  const handleEdit = (id) => {
    navigate("/books/edit/" + id);
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
        >
          Add
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-stripped table-bordered table-responsive ">
          <thead className="table-light align-middle">
            <tr>
              <th>Cover</th>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Public Year</th>
              <th>Total Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider align-middle">
            {requesting ? (
              <tr>
                <td>Loading</td>
              </tr>
            ) : data && data.length ? (
              data.map((book) => (
                <tr key={book.id}>
                  <td>
                    <img src={book.imageS} alt="" />
                  </td>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.publicYear}</td>
                  <td>{book.quantity}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success m-5 text-white"
                      onClick={() => handleEdit(book.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger m-5"
                      onClick={() => handleDelete(book.id, data)}
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
    </div>
  );
};

export default Books;

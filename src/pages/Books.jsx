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
        >
          Add
        </button>
      </div>
      <div className="table-responsive rounded-3">
        <table className="table table-white table-sm table-hover table-stripped table-bordered p-4  ">
          <thead className="table-primary align-middle text-center ">
            <tr>
              <th>Cover</th>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Published Year</th>
              <th>Total Qty</th>
              <th>Actions</th>
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
                  <td className="text-center ">
                    <img src={book.imageS} alt="" className="h-75" />
                  </td>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td className="text-center">{book.publishedYear}</td>
                  <td className="text-center">{book.quantity}</td>
                  <td>
                    <div className="d-flex no-wrap">
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

export default Books;

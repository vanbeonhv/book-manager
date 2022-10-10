import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../redux/actions/bookActions";

const Books = () => {
  const data = useSelector((state) => state.books.data);
  const requesting = useSelector((state) => state.books.requesting);
  // console.log(data, requesting);
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div className="">
      <div className="text-end">
        <button type="button" className="btn btn-success m-5">
          Edit
        </button>
        <button type="button" className="btn btn-danger m-5">
          Delete
        </button>
      </div>
      <table className="table table-hover table-stripped table-bordered table-responsive">
        <thead className="table-light">
          <tr>
            <th>Cover</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Public Year</th>
            <th>Total Qty</th>
            <th>Rented Qty</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {requesting ? (
            <tr>
              <td>Loading</td>
            </tr>
          ) : data && data.length ? (
            data.map((book) => (
              <tr key={book.ISBN}>
                <td>
                  <img src={book.ImageS} alt="" />
                </td>
                <td>{book.ISBN}</td>
                <td>{book.Title}</td>
                <td>{book.Author}</td>
                <td>{book.Publisher}</td>
                <td>{book.PublicYear}</td>
                <td>5</td>
                <td>5</td>
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

export default Books;

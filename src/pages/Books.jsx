import React, { useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState({});
  axios
    .get("https://localhost:3001/api/books")
    .then((res) => setBooks(res.data));
  return (
    <div>
      <table>
        <thead>
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
        <tbody>
          {books.map((book) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;

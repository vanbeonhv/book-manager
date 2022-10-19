import React, { useState } from "react";

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const pageNumbers = [];
  const activePage = [];
  console.log(activePage);

  let prevDisable = "";
  let nextDisable = "";
  let isActive = "";
  if (currentPage <= 1) {
    prevDisable = "disabled";
  }
  if (currentPage >= totalPages) {
    nextDisable = "disabled";
  }
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  for (let i = 0; i <= totalPages; i++) {
    activePage.push("");
  }
  return (
    <nav className="float-end">
      <ul className="pagination">
        <li className={`page-item ${prevDisable}`}>
          <a
            onClick={() => {
              paginate(currentPage - 1);
            }}
            className="page-link cursor-default user-select-none"
          >
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${activePage[number + 1]}`}>
            <a
              onClick={() => {
                console.log("number ", number);
                paginate(number);
                activePage[number + 1] = "active";
                console.log("currentPage ", currentPage);
              }}
              className={"page-link cursor-default user-select-none"}
            >
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${nextDisable}`}>
          <a
            onClick={() => {
              paginate(currentPage + 1);
            }}
            className="page-link cursor-default user-select-none"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

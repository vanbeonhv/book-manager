import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);
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

  return (
    <nav className="">
      <ul className="pagination justify-content-end">
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
          <li
            key={number}
            className={number === activePage ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => {
                setActivePage(number);
                paginate(number);
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

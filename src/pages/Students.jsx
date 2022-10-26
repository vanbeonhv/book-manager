import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { deleteStudents, loadStudents } from "../redux/actions/studentAction";
import { Flip, toast } from "react-toastify";

const deleteSuccess = () =>
  toast.success("Deleted!", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 1000,
    theme: "colored",
    transition: Flip,
  });
const Students = () => {
  const data = useSelector((state) => state.student.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let currentStudents = [];
  if (data) {
    currentStudents = data.slice(indexOfFirstItem, indexOfLastItem);
  }
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
    dispatch(deleteStudents(id, data));
    deleteSuccess();
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            {currentStudents && currentStudents.length ? (
              currentStudents.map((book) => (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{book.school}</td>
                  <td>{book.email}</td>
                  <td>{book.phone_number}</td>
                  <td className="text-center">{book.city}</td>
                  <td>
                    <div className="d-flex no-wrap justify-content-center">
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
        <div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Students;

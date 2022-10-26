import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBorrow, loadBorrow } from "../redux/actions/borrowActions";
import Pagination from "../components/Pagination";
import { Flip, toast } from "react-toastify";

const deleteSuccess = () =>
  toast.success("Deleted!", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 1000,
    theme: "colored",
    transition: Flip,
  });
const BorrowingManager = () => {
  const data = useSelector((state) => state.borrow.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let currentBorrow = [];
  if (data) {
    currentBorrow = data.slice(indexOfFirstItem, indexOfLastItem);
  }
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
    dispatch(deleteBorrow(id, data));
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
            {currentBorrow ? (
              currentBorrow.map((borrow) => {
                return (
                  <tr key={borrow.id} className="">
                    {/* {console.log(borrow.id)} */}
                    <td>{borrow.studentName}</td>
                    <td>{borrow.school}</td>
                    <td>{borrow.book}</td>
                    <td className="text-center">
                      {
                        (borrow.borrow_date = moment(borrow.borrow_date).format(
                          "MM/DD/yyyy"
                        ))
                      }
                    </td>
                    <td className="text-center">
                      {borrow.return_date
                        ? (borrow.return_date = moment(
                            borrow.return_date
                          ).format("MM/DD/yyyy"))
                        : ""}
                    </td>
                    <td className="text-center">
                      <span
                        className={`badge rounded-pill d-inline text-capitalize text-white fw-light text-bg-${borrow.status} `}
                      >
                        {borrow.status}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex no-wrap justify-content-center">
                        <button
                          type="button"
                          className="btn btn-secondary m-5 text-white"
                          onClick={() => handleReturn(borrow.id)}
                        >
                          Return
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger m-5"
                          onClick={() => handleDelete(borrow.id, data)}
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

export default BorrowingManager;

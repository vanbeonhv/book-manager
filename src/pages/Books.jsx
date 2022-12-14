import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooks, loadBooks } from "../redux/actions/bookActions";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import CustomImage from "../components/CustomImage";
import { Flip, toast } from "react-toastify";

const deleteSuccess = () =>
  toast.success("Deleted!", {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 1000,
    theme: "colored",
    transition: Flip,
  });
const Books = () => {
  const data = useSelector((state) => state.books.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let currentBooks = [];
  if (data) {
    currentBooks = data.slice(indexOfFirstItem, indexOfLastItem);
  }
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
            {currentBooks && currentBooks.length ? (
              currentBooks.map((book) => (
                <tr key={book.id}>
                  <td className="text-center ">
                    <CustomImage className={"h-75"} src={book.imageS} />
                  </td>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td className="text-center">{book.publishedYear}</td>
                  <td className="text-center">{book.quantity}</td>
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
export default Books;

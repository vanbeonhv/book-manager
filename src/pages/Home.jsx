import React, { useEffect, useState } from "react";
import CustomCarousel from "../components/CustomCarousel";
import "./Home.css";
import { MdAttachMoney } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import axios from "axios";
const Home = () => {
  const [totalUser, setTotalUser] = useState([]);
  const [borrow, setBorrow] = useState([]);
  const [totalBook, setTotalBook] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const userURL = "http://localhost:3001/api/students";
      const borrowURL = "http://localhost:3001/api/borrow";
      const bookURL = "http://localhost:3001/api/books";

      const responses = await Promise.all([
        axios.get(userURL),
        axios.get(borrowURL),
        axios.get(bookURL),
      ]).catch((err) => {
        throw err;
      });
      const userData = await responses[0].data;
      const borrowData = await responses[1].data;
      const bookData = await responses[2].data;

      setTotalUser(userData.length);
      setBorrow(borrowData.length);
      setTotalBook(bookData.length);
    };
    fetchData();
  }, []);
  return (
    <div className="">
      <div className="row mb-24">
        <div className="col-3 ps-0">
          <div className="rounded-4 bg-report-1 d-flex justify-content-center align-items-center py-24">
            <div className=" py-12 text-center">
              <div className="p-12 rounded-circle ">
                <IoBookSharp className="fs-1 text-report-1-bold opacity-75" />
              </div>
              <h3 className="fs-2 text-report-1-bold fw-semibold my-12">
                {totalBook * 110}
              </h3>
              <p>{}</p>
              <p className="mt-12 text-report-1-bold">Total books</p>
            </div>
          </div>
        </div>
        <div className="col-3 ">
          <div className="rounded-4 bg-report-2 d-flex justify-content-center align-items-center py-24">
            <div className=" py-12 text-center">
              <div className="p-12 rounded-circle ">
                <AiOutlineUser className="fs-1 text-report-2-bold opacity-75" />
              </div>
              <h3 className="fs-2 text-report-2-bold fw-semibold my-12">
                {totalUser * 110}
              </h3>
              <p className="mt-12 text-report-2-bold">Total users</p>
            </div>
          </div>
        </div>
        <div className="col-3 ">
          <div className="rounded-4 bg-report-3 d-flex justify-content-center align-items-center py-24">
            <div className=" py-12 text-center">
              <div className="p-12 rounded-circle ">
                <BiTransferAlt className="fs-1 text-report-3-bold opacity-75" />
              </div>
              <h3 className="fs-2 text-report-3-bold fw-semibold my-12">
                {borrow * 110}
              </h3>
              <p className="mt-12 text-report-3-bold">Total borrow - return</p>
            </div>
          </div>
        </div>
        <div className="col-3 pe-0">
          <div className="rounded-4 bg-report-4 d-flex justify-content-center align-items-center py-24">
            <div className=" py-12 text-center">
              <div className="p-12 rounded-circle ">
                <BsDownload className="fs-1 text-report-4-bold opacity-75" />
              </div>
              <h3 className="fs-2 text-report-4-bold fw-semibold my-12">
                750k
              </h3>
              <p className="mt-12 text-report-4-bold">Total download</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row main-content">
        <div className="col-12 bg-download bg-cover h-200 rounded-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className=" py-24 ">
              <p className="fw-bold text-grayer mb-0">Earnings</p>
              <p className="fs-4 mb-0">$63,448.78</p>
            </div>
            <button
              type="button"
              className="btn btn-primary rounded-circle text-white fs-3 lh-sm p-10"
            >
              <MdAttachMoney />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary rounded-3 text-white fs-6 p-12"
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 px-0">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/09/06/24392_BB_B_OMP_09-06.jpg"
            alt=""
            className="w-100 mt-24 rounded-3"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 px-0">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/10/18/24859_BB_C_BestBooks_10-18.jpg"
            alt=""
            className="w-100 mt-24 rounded-3"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 px-0">
          <img
            src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Languages_1112x223_blank.jpg"
            alt=""
            className="w-100 mt-24 rounded-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

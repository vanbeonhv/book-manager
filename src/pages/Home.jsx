import React from "react";
import CustomCarousel from "../components/CustomCarousel";
import "./Home.css";
import { MdAttachMoney } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="row w-100">
        <div className="col-12 bg-download bg-cover ms-12 h-200 ">
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
      <div className="row mt-24">
        <div className="col-3 ">
          <div className="rounded-4 bg-report-1 d-flex justify-content-center align-items-center py-12">
            <div className=" py-12 text-center">
              <div className="p-12 rounded-circle ">
                <IoBookSharp className="fs-1 text-report-1-bold opacity-75" />
              </div>
              <h3 className="fs-2 text-report-1-bold fw-semibold my-12">750</h3>
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
                1245
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
                5235
              </h3>
              <p className="mt-12 text-report-3-bold">Total borrow - return</p>
            </div>
          </div>
        </div>
        <div className="col-3 ">
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
    </div>
  );
};

export default Home;

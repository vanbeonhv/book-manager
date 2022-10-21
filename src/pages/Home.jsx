import React, { useEffect, useState } from "react";
import "./Home.css";
import { MdAttachMoney } from "react-icons/md";

import axios from "axios";
const Home = () => {
  return (
    <div className="">
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
      <div className="row shadow mt-24">
        <div className="col-12 px-0">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/09/06/24392_BB_B_OMP_09-06.jpg"
            alt=""
            className="w-100 rounded-3"
          />
        </div>
      </div>
      <div className="row mt-24">
        <div className="col-12 px-0">
          <img
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/10/18/24859_BB_C_BestBooks_10-18.jpg"
            alt=""
            className="w-100 rounded-3"
          />
        </div>
      </div>
      <div className="row mt-24">
        <div className="col-12 px-0">
          <img
            src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/content/Languages_1112x223_blank.jpg"
            alt=""
            className="w-100 rounded-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

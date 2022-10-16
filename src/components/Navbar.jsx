import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../data/avatar.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("d-none");
  const loginInfo = useSelector((state) => state.login.data);

  return (
    // <div className="position-fixed top-0">
    <div className="d-flex justify-content-between py-8 px-2">
      <div>
        <button className="btn text-primary fs-6">
          <AiOutlineMenu />
        </button>
      </div>
      <div className="d-flex align-items-center gap-5 me-12 position-relative">
        <img
          src={loginInfo[0].img}
          alt="avatar"
          className="rounded-circle h-32 w-32"
        />
        <p className="mb-0">
          Hi, <span className="fw-semibold">{loginInfo[0].name}</span>
        </p>
        <div
          className="p-4 cursor-pointer"
          onClick={() => {
            display === "d-block"
              ? setDisplay("d-none")
              : setDisplay("d-block");
          }}
        >
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div
        className={`position-absolute top-100 end-0 me-12 w- bg-light border border-primary shadow rounded-3 py-10 px-4 ${display}`}
      >
        <p className="fst-italic fs-7">
          You logged as:
          <span className="fw-semibold fst-normal fs-6 ms-4 text-capitalize text-primary">
            {loginInfo[0].role}
          </span>
        </p>
        <hr />
        <div className="text-end mt-8">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => navigate("../../")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;

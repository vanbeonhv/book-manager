import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../data/avatar.jpg";
import { logout } from "../redux/actions/loginActions";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("d-none");
  const loginInfo = useSelector((state) => state.login.data);
  const logoutBtn = document.querySelector(".logout");
  const loginTemp = JSON.parse(localStorage.getItem("loginTemp"));

  if (loginInfo === []) {
    console.log("test");
  }
  return (
    // <div className="position-fixed top-0">
    <div className="d-flex justify-content-between py-8 px-2">
      <div className="">
        <button className="btn text-primary fs-6 ">
          <AiOutlineMenu />
        </button>
      </div>
      <div className="dropdown">
        <button className="me-12 dropdown-toggle">
          <img
            src={loginInfo[0].img || loginTemp[0].img}
            alt="avatar"
            className="rounded-circle h-32 w-32"
          />
          <p className="mb-0">
            Hi,{" "}
            <span className="fw-semibold">
              {loginInfo[0].name || loginTemp[0].name}
            </span>
          </p>
        </button>
      </div>

      <ul className="dropdown-menu">
        <li>
          <a className="fst-italic fs-7 dropdown-item">
            You logged as:
            <span className="fw-semibold fst-normal fs-6 ms-4 text-capitalize text-primary">
              {loginInfo[0].role || loginTemp[0].role}
            </span>
          </a>
        </li>
        <hr />
        <li>
          <div className="text-end mt-8 dropdown-item">
            <button
              type="button"
              className="btn btn-outline-danger logout"
              onClick={() => {
                dispatch(logout());
                navigate("../../");
                localStorage.removeItem("loginTemp");
              }}
            >
              Logout
            </button>
          </div>
        </li>
      </ul>
      {/* <div className="d-flex align-items-center gap-5 me-12 position-relative ">
        <img
          src={loginInfo[0].img || loginTemp[0].img}
          alt="avatar"
          className="rounded-circle h-32 w-32"
        />
        <p className="mb-0">
          Hi,{" "}
          <span className="fw-semibold">
            {loginInfo[0].name || loginTemp[0].name}
          </span>
        </p>
        <button
          className="p-4 cursor-pointer dropdown-toggle"
          onClick={() => {
            display === "d-block"
              ? setDisplay("d-none")
              : setDisplay("d-block");
          }}
        >
          <MdKeyboardArrowDown />
        </button>
      </div>
      <div
        className={`position-absolute top-100 end-0 me-12 w- bg-light border border-primary shadow rounded-3 py-10 px-4 ${display}`}
      >
        <p className="fst-italic fs-7">
          You logged as:
          <span className="fw-semibold fst-normal fs-6 ms-4 text-capitalize text-primary">
            {loginInfo[0].role || loginTemp[0].role}
          </span>
        </p>
        <hr />
        <div className="text-end mt-8">
          <button
            type="button"
            className="btn btn-outline-danger logout"
            onClick={() => {
              dispatch(logout());
              navigate("../../");
              localStorage.removeItem("loginTemp");
            }}
          >
            Logout
          </button>
        </div>
      </div> */}
    </div>
    // </div>
  );
};

export default Navbar;

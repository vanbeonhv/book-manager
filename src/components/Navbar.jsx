import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";

const Navbar = () => {
  return (
    <div className="w-100 ">
      <div className="d-flex justify-content-between mx-24 p-8">
        <button className="btn text-primary px-12 fs-6">
          <AiOutlineMenu />
        </button>
        <div className="d-flex align-items-center gap-5">
          <img src={avatar} alt="avatar" className="rounded-circle h-32 w-32" />
          <p className="mb-0">
            Hi, <span className="fw-semibold">Selena</span>
          </p>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

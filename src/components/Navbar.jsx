import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";

const Navbar = () => {
  return (
    // <div className="position-fixed top-0">
    <div className="d-flex justify-content-between py-8 px-2 bg-old">
      <div>
        <button className="btn text-primary fs-6">
          <AiOutlineMenu />
        </button>
      </div>
      <div className="d-flex align-items-center gap-5 me-10">
        <img src={avatar} alt="avatar" className="rounded-circle h-32 w-32" />
        <p className="mb-0">
          Hi, <span className="fw-semibold">Selena</span>
        </p>
        <MdKeyboardArrowDown />
      </div>
    </div>
    // </div>
  );
};

export default Navbar;

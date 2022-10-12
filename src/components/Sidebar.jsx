import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineBarChart } from "react-icons/ai";
import { GiBlackBook } from "react-icons/gi";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import "./Sidebar.css";
const Sidebar = () => {
  const links = [
    {
      name: "Home",
      link: "home",
      icon: <AiOutlineHome />,
    },
    {
      name: "Books",
      link: "books",
      icon: <GiBlackBook />,
    },
    {
      name: "Borrowing Manager",
      link: "borrowing-manager",
      icon: <BsBoxArrowRight />,
    },
    // {
    //   name: "Returning Manager",
    //   link: "returning-manager",
    //   icon: <BsBoxArrowLeft />,
    // },
    {
      name: "Report",
      link: "report",
      icon: <AiOutlineBarChart />,
    },
  ];
  const activeLink =
    "d-flex align-items-center gap-5 text-decoration-none fs-6 ps-16 pt-12 pb-10 m-8 rounded-3 sidebar-link text-white bg-primary";
  const normaLink =
    "d-flex align-items-center gap-5 text-decoration-none fs-6 ps-16 pt-12 pb-10 m-8 rounded-3 sidebar-link text-black";
  return (
    <div className="vh-100 shadow">
      <div className="mt-5 sidebar_wrap">
        <div className="d-flex align-items-center justify-content-start fs-5 ms-24">
          <IoLibraryOutline className="sidebar_logo" />
          <p className="mb-0 ms-10 sidebar__name">Marc Library</p>
        </div>
        <div className="mt-10">
          {links.map((link) => (
            <NavLink
              to={`/${link.link}`}
              key={link.name}
              className={({ isActive }) => (isActive ? activeLink : normaLink)}
              // onClick={() => (setActive = !isActive)}
            >
              {link.icon}
              <p className="mb-0 sidebar__menu">{link.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Books from "../pages/Books";
import Home from "../pages/Home";
import "typeface-roboto";
import AddBooks from "../pages/AddBooks";
import EditBooks from "../pages/EditBooks";
import BorrowingManager from "../pages/BorrowingManager";
import AddUsers from "../pages/AddUsers";
import Layout from "../layout/Layout";
import EditUsers from "../pages/EditUsers";
import { useSelector } from "react-redux";
import AddBorrow from "../pages/AddBorrow";
import EditBorrow from "../pages/EditBorrow";

const Manager = () => {
  const loginInfo = useSelector((state) => state.login.data);
  console.log(loginInfo[0].role);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books/add" element={<AddBooks />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books" element={<Books />} />
        <Route path="/borrowing-manager" element={<BorrowingManager />} />
        <Route path="/borrowing-manager/add" element={<AddBorrow />} />
        <Route path="/borrowing-manager/edit/:id" element={<EditBorrow />} />
        {/* <Route path="/report" element={<Test />} /> */}
      </Routes>
      <Outlet />
    </Layout>
  );
};

export default Manager;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../pages/Books";
import Home from "../pages/Home";
import "typeface-roboto";
import AddBooks from "../pages/AddBooks";
import Test from "../pages/Test";
import EditBooks from "../pages/EditBooks";
import BorrowingManager from "../pages/BorrowingManager";
import AddUsers from "../pages/AddUsers";
import Layout from "../layout/Layout";

const Admin = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBooks />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/borrowing-manager" element={<BorrowingManager />} />
        <Route path="/borrowing-manager/add" element={<AddUsers />} />
        <Route
          path="/borrowing-manager/edit/:id"
          element={<BorrowingManager />}
        />
        <Route path="/report" element={<Test />} />
      </Routes>
    </Layout>
  );
};

export default Admin;

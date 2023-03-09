import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Books from '../pages/Books';
import Home from '../pages/Home';
import 'typeface-roboto';
import AddBooks from '../pages/AddBooks';
import EditBooks from '../pages/EditBooks';
import BorrowingManager from '../pages/BorrowingManager';
import Layout from '../layout/Layout';
import Students from '../pages/Students';
import AddBorrow from '../pages/AddBorrow';
import Report from '../pages/Report';
import ReturnBorrow from '../pages/ReturnBorrow';
import AddStudents from '../pages/AddStudents';
import EditStudents from '../pages/EditStudents';

const Admin = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/add' element={<AddBooks />} />
        <Route path='/books/edit/:id' element={<EditBooks />} />
        {/* <Outlet /> */}
        <Route path='/students-manager' element={<Students />} />
        <Route path='/students-manager/add' element={<AddStudents />} />
        <Route path='/students-manager/edit/:id' element={<EditStudents />} />
        <Route path='/borrowing-manager' element={<BorrowingManager />} />
        <Route path='/borrowing-manager/add' element={<AddBorrow />} />
        <Route
          path='/borrowing-manager/return/:id'
          element={<ReturnBorrow />}
        />
        <Route path='/report' element={<Report />} />
      </Routes>
      <Outlet />
    </Layout>
  );
};

export default Admin;

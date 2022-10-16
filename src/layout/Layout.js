import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Layout.css";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div className="wrapper">
      {/* <BrowserRouter> */}
      <div className="navbar-custom">
        <Navbar />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content-page">
        {/* prettier-ignore */}
        <main className="p-10 rounded-3 m-40 bg-white shadow">
            {children}
          </main>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default Layout;

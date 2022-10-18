import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Layout.css";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoLibraryOutline, IoLogoDiscord } from "react-icons/io5";
import { AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";

function Layout({ children }) {
  return (
    <div className="wrapper vh-100">
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
      <footer className="footer">
        <div className="d-flex gap-12 ps-12">
          <IoLibraryOutline className="fs-4" />
          <p className="mb-0">© 2022 Company, Inc</p>
        </div>
        <div className="fs-3 text-primary gap-4 d-flex pe-12">
          <AiOutlineFacebook />
          <AiOutlineGithub />
          <IoLogoDiscord />
        </div>
      </footer>
    </div>
  );
}

export default Layout;

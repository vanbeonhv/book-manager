import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./Layout.css";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoLibraryOutline, IoLogoDiscord } from "react-icons/io5";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineGoogle,
} from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";

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
        <main className="main-content-responsive">
            {children}
          </main>
      </div>
      <footer className="footer">
        <div className="fs-3 text-primary gap-12 d-flex justify-content-center gap-4 align-items-center h-100">
          <Link to="#">
            <button
              type="button"
              className="btn btn primary text-white bg-facebook fs-6 lh-icon rounded-circle"
            >
              <FiFacebook />
            </button>
          </Link>
          <Link to="#">
            <button
              type="button"
              className="btn btn primary text-white bg-twitter fs-6 lh-icon rounded-circle"
            >
              <FiTwitter />
            </button>
          </Link>
          <Link to="#">
            <button
              type="button"
              className="btn btn primary text-white bg-google fs-6 lh-icon rounded-circle"
            >
              <AiOutlineGoogle />
            </button>
          </Link>
          <Link to="#">
            <button
              type="button"
              className="btn btn primary text-white bg-github fs-6 lh-icon rounded-circle"
            >
              <AiOutlineGithub />
            </button>
          </Link>
          <Link to="#">
            <button
              type="button"
              className="btn btn primary text-white bg-discord fs-6 lh-icon rounded-circle"
            >
              <IoLogoDiscord />
            </button>
          </Link>
        </div>
        <div className="bg-grayer h-50 text-center lh-50 gap-5">
          <p className="mb-0 text-white">© 2022 Company, Inc</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

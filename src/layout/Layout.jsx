import "./Layout.css";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoLogoDiscord } from "react-icons/io5";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
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
        <main className="main-content-responsive">{children}</main>
      </div>
      <footer className="footer">
        <div className="fs-3 text-primary gap-12 d-flex justify-content-center gap-4 align-items-center h-100">
          <a className="btn btn primary text-white bg-facebook fs-6 lh-icon rounded-circle">
            <FiFacebook />
          </a>
          <a className="btn btn primary text-white bg-twitter fs-6 lh-icon rounded-circle">
            <FiTwitter />
          </a>
          <a className="btn btn primary text-white bg-google fs-6 lh-icon rounded-circle">
            <AiOutlineGoogle />
          </a>
          <a
            href="https://github.com/vanbeonhv"
            target="_blank"
            className="btn btn primary text-white bg-github fs-6 lh-icon rounded-circle"
          >
            <AiOutlineGithub />
          </a>
          <a className="btn btn primary text-white bg-discord fs-6 lh-icon rounded-circle">
            <IoLogoDiscord />
          </a>
        </div>
        <div className="bg-grayer h-50 text-center lh-50 gap-5">
          <p className="mb-0 text-white">© 2022 Company, Inc</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Books from "./pages/Books";
import Home from "./pages/Home";
import "typeface-roboto";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="vh-100 ">
      <BrowserRouter>
        <div className="position-relative d-flex vh-100">
          <div className="position-fixed start-0">
            <Sidebar />
          </div>
          <div className="ms-280 min-vh-100 position-fix vw-100">
            <Navbar />
            <div>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/borrowing-manager" element={<Home />} />
                <Route path="/returning-manager" element={<Home />} />
                <Route path="/report" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

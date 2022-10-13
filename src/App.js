import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Books from "./pages/Books";
import Home from "./pages/Home";
import "typeface-roboto";
import Navbar from "./components/Navbar";
import AddBooks from "./pages/AddBooks";
import Test from "./pages/Test";
import EditBooks from "./pages/EditBooks";
import BorrowingManager from "./pages/BorrowingManager";
import AddUsers from "./pages/AddUsers";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="navbar-custom">
          <Navbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content-page">
          <div className="p-10 rounded-3 mx-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/add" element={<AddBooks />} />
              <Route path="/books/edit/:id" element={<EditBooks />} />
              <Route path="/students-manager" element={<Home />} />

              <Route path="/borrowing-manager" element={<BorrowingManager />} />
              <Route path="/borrowing-manager/add" element={<AddUsers />} />
              <Route
                path="/borrowing-manager/edit/:id"
                element={<BorrowingManager />}
              />
              <Route path="/report" element={<Test />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

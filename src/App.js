import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Sidebar from "./Components/sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content"></div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/comment" element={<Comment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

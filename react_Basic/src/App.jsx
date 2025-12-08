// import {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./App.css";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/services"> Services </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            {/* fallBack  -- used if page path do not match provided routes*/}
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

// json {"name":"val"}

// xml

// person

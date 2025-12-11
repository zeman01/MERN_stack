// import {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./App.css";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Todo from "./pages/todo.jsx";
import { ClientLayout } from "./layouts/clientLayout.jsx";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<ClientLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/todo" element={<Todo />} />

              {/* fallBack  -- used if page path do not match provided routes*/}
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

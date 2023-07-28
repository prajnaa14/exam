import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NoPage from "./Components/NoPage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Wrap the nested routes with the Layout component */}
          <Route path="/" element={<Layout />}>
            {/* Use the Outlet component to render nested routes */}
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
            <Outlet />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

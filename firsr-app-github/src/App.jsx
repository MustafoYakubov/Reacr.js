import React from "react";
import Navbar from "./layout/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlog from "./components/AddBlog/AddBlog";
import Blogs from "./components/Blogs/Blog";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="add-blog" element={<AddBlog />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      ,
    </>
  );
};

export default App;

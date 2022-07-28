import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Register from "pages/LoginPage";
import LoginPage from "pages/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} exact />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </>
  );
}

export default App;

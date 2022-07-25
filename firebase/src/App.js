import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import React from "react";
import { Routes, Route } from "react-router-dom";
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

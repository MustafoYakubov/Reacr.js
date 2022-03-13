import React from "react";
import Navbar from "./layout/navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return <>
  <Navbar/>
   {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<App  />} />
    </Routes>
  </BrowserRouter>, */}
  </>;
};

export default App;

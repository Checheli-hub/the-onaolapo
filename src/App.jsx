import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Episodes from "./pages/Episodes";
import GetInvolved from "./pages/GetInvolved";
import Impact from "./pages/Impact";
import Support from "./pages/Support";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;

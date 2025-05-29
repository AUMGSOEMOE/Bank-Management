import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/authorization";

const App = () => {
  return (
    <div className=" h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
// import { useGlobalHook } from "./context/Contexts";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import "./App.css";
import Details from "./Pages/details/Details";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:ids" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;

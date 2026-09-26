import React from "react";
import Landingpages from "./pages/landingpages";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpages />} />
      </Routes>
    </div>
  );
};

export default App;

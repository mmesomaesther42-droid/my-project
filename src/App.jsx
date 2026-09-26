import React from "react";
import Landingpages from "./pages/landingpages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpages />} />
      </Routes>
    </div>
  );
};

export default App;

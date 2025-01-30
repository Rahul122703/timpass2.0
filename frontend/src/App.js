import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </div>
      </Router>
  );
};

export default App;

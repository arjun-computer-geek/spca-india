import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      {/* <Redirect from='/' to='/landing' /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

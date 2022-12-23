import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "views/Landing.js";
import EducationAwarness from "views/EducationAwarness";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/eductaion-and-awarness' element={<EducationAwarness />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

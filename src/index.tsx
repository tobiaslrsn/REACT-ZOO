import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// LAYOUT //
import { Layout } from "./layouts/Layout";

// ROUTES //
import { Home } from "./components/routes/Home.routes";
import { About } from "./components/routes/About.routes";
import { NotFound } from "./components/errors/NotFound";
import { Animal } from "./components/pages/Animal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/animal/:id" element={<Animal />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

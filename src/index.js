import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/create/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

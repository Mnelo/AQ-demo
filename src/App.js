import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./NewComponent/Head";
import Knowledge from "./NewComponent/Knowledge";
import MainPage from "./NewComponent/MainPage";
import "./App.less";
import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div className="App">
      <div className="head-show">
        <Head />
      </div>

      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Knowledge />} />
            <Route path="/main-page" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

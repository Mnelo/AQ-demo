import React from "react";
import Head from "./Component/Head";
import Knowledge from "./NewComponent/Knowledge";
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
        <Knowledge />
      </div>
    </div>
  );
};

export default App;

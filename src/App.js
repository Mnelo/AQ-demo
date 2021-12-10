import React, { useState } from "react";
import Head from "./Component/Head";
import SideBar from "./Component/SideBar";
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Page3 from "./Component/Page3";
import Page4 from "./Component/Page4";
import Page5 from "./Component/Page5";
import KnowledgePage from "./Component/KnowledgePage";
import AQ from "./Component/AQ";
import "antd/dist/antd.css";
import "./App.css";
import "antd/dist/antd.min.css";
const App = () => {
  const [content, setContent] = useState(6);
  const [type, setType] = useState(1);

  return (
    <div className="App">
      {type ? (
        <>
          <div className="head-show">
            <Head setType={setType} />
          </div>

          <div className="side-bar-t">
            <SideBar setContent={setContent} />
          </div>

          <div className="content-show">
            {content === 1 ? <Page1 setContent={setContent} /> : null}
            {content === 2 ? <Page2 setContent={setContent} /> : null}
            {content === 3 ? <Page3 setContent={setContent} /> : null}
            {content === 4 ? <Page4 setContent={setContent} /> : null}
            {content === 5 ? <Page5 setContent={setContent} /> : null}
            {content === 6 ? <KnowledgePage /> : null}
          </div>
        </>
      ) : (
        <AQ />
      )}
    </div>
  );
};

export default App;

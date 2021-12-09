import Head from "./Component/Head";
import SideBar from "./Component/SideBar"
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Page3 from "./Component/Page3";
import KnowledgePage from "./Component/KnowledgePage";
import "antd/dist/antd.css";
import "./App.css";
import 'antd/dist/antd.min.css';
const App = () => {
  return (
    <div className="App">
      <div className="head-show">
        <Head />
      </div>

      <div className="side-bar-t">
        <SideBar />
      </div>
      
      <div className="content-show">
        <KnowledgePage />
      </div>
    </div>
  );
};

export default App;

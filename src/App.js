import Head from "./Component/Head";
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Page3 from "./Component/Page3";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="head-show">
        <Head />
      </div>

      <div className="content-show">
        <Page3 />
      </div>
    </div>
  );
};

export default App;

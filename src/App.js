import Head from "./Component/Head";
import SideBar from "./Component/SideBar"
import "./App.css";
import 'antd/dist/antd.min.css';
const App = () => {
  return (
    <div className="App">
      <Head />
      <SideBar />
    </div>
  );
};

export default App;

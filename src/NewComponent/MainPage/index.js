import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AQ from "./AQ";
import "./style.less";

const { Option } = Select;

const MainPage = () => {
  const navigate = useNavigate();

  const [sideBarList, setSiderBarList] = useState([]);
  const [sideBarSelect, setSideBarSelect] = useState(
    decodeURI(window.location.search).split("=")[1]
  );
  const [moduleSelect, setModuleSelect] = useState("AQ");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8081/knowledge");

    setSiderBarList(data.res);
  };

  const onChange = (value) => {
    navigate(`/main-page?name=${value}`);

    setSideBarSelect(value);
  };

  return (
    <div className="main-page">
      <div className="sider-bar">
        <div className="select">
          <Select
            className="name"
            value={sideBarSelect}
            onChange={onChange}
            bordered={false}
          >
            {sideBarList.map((item) => {
              return (
                <Option value={item.name} key={item.name}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </div>

        <div className="module-list">
          <div
            className={moduleSelect === "analyse" ? "line line-select" : "line"}
            onClick={() => {
              setModuleSelect("analyse");
            }}
          >
            归因分析
          </div>
          <div
            className={moduleSelect === "AQ" ? "line line-select" : "line"}
            onClick={() => {
              setModuleSelect("AQ");
            }}
          >
            智能问答
          </div>
        </div>
      </div>

      <div className="empty-box"></div>

      <div className="content">
        {moduleSelect === "analyse" ? null : null}
        {moduleSelect === "AQ" ? <AQ /> : null}
      </div>
    </div>
  );
};

export default MainPage;

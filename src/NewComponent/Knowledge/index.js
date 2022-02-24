import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Select } from "antd";
import axios from "axios";
import "./style.less";

const { Option } = Select;
const { Search } = Input;
const Knowledge = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8081/knowledge");

    setList(data.res);
  };

  const clickCard = (item) => {
    navigate(`./main-page?name=${item.name}`);
  };

  return (
    <div className="knowledge">
      <div className="title">领域知识</div>
      <div className="des">欢迎使用AnyDATA先进分析能力展示平台！</div>

      <div className="content">
        <div className="head">
          <div className="search">
            <Search placeholder="请输入" />
          </div>
          <div className="select-box">
            <Select className="select" defaultValue="最近访问">
              <Option value="最近访问">最近访问</Option>
              <Option value="首字母顺序排列">首字母顺序排列</Option>
            </Select>
          </div>
          <div className="word">排序</div>
        </div>

        <div className="card-table">
          {list.map((item, index) => {
            return (
              <div
                className="card"
                key={index.toString()}
                onClick={() => {
                  clickCard(item);
                }}
              >
                <div className="top">
                  <div className="pic"></div>

                  <div className="word">
                    <div className="name">{item.name}</div>
                    <div className="tag">
                      {item.tag.map((tItem, tIndex) => {
                        return (
                          <span className="text" key={tIndex.toString()}>
                            {tItem}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="des">{item.des}</div>

                <div className="time">
                  <span>最近访问</span>
                  <span className="date">{item.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.less";

const Knowledge = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8081/knowledge");

    setList(data.res);
  };

  return (
    <div className="knowledge">
      <div className="title">领域知识</div>
      <div className="des">欢迎使用AnyDATA先进分析能力展示平台！</div>

      <div className="content">
        <div className="head"></div>

        <div className="card-table">
          {list.map((item, index) => {
            return (
              <div className="card" key={index.toString()}>
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

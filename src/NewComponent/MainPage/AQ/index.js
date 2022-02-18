import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import jiqiren from "../../../Asset/Image/jiqiren.svg";
import rentou from "../../../Asset/Image/rentou.svg";
import "./style.less";

const AQ = () => {
  const [AQData, setAQData] = useState([]);

  useEffect(() => {
    let data = [
      <div className="left-box">
        <div className="a-head-img">
          <img src={jiqiren} alt="" className="icon" />
        </div>
        <div className="a-content">123</div>
      </div>,
      <div className="right-box">
        <div className="q-head-img">
          <img src={rentou} alt="" className="icon" />
        </div>
        <div className="q-content">123</div>
      </div>,
    ];

    setAQData(data);
  }, []);

  return (
    <div className="AQ">
      <div className="title">AnyDATA智能机器人</div>

      <div className="AQ-content">
        <div className="left">
          <div className="AQ-scroll">
            {AQData.map((item) => {
              return item;
            })}
          </div>
          <div className="input-box">
            <Input className="input-t" />
            <Button type="primary" className="send">
              发送
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="title">问答分析</div>

          <div className="tag">分词</div>

          <div className="word-content"></div>

          <div className="tag">语义理解</div>

          <div className="l-a"></div>

          <div className="tag">出话模块</div>

          <div className="word-content"></div>

          <div className="tag">关联文档</div>

          <div className="word-content"></div>
        </div>
      </div>
    </div>
  );
};

export default AQ;

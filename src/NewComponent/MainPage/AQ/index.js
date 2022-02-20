import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import axios from "axios";
import jiqiren from "../../../Asset/Image/jiqiren.svg";
import rentou from "../../../Asset/Image/rentou.svg";
import "./style.less";

const AQ = () => {
  const [AQData, setAQData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [analysis, setAnalysis] = useState({});

  useEffect(() => {
    if (document.getElementById("srcollAQ")) {
      document.getElementById("srcollAQ").scrollTo(0, 100000);
    }
  }, [AQData]);

  /**
   * @description 获取回答
   */
  const getAnswer = async (value) => {
    const { data } = await axios.get(
      `http://localhost:8081/aq?search=${value}`
    );

    return data;
  };

  /**
   * @description 发送搜索信息
   */
  const send = async () => {
    if (inputValue) {
      let newAQData = [
        ...AQData,
        ...[
          <div className="right-box">
            <div className="q-head-img">
              <img src={rentou} alt="" className="icon" />
            </div>
            <div className="q-content">{inputValue}</div>
          </div>,
          <div className="left-box">
            <div className="a-head-img">
              <img src={jiqiren} alt="" className="icon" />
            </div>
            <div className="a-content">...</div>
          </div>,
        ],
      ];

      setAQData(newAQData);
      setInputValue("");

      const res = await getAnswer(inputValue);

      if (res.answer) {
        newAQData[newAQData.length - 1] = (
          <div className="left-box">
            <div className="a-head-img">
              <img src={jiqiren} alt="" className="icon" />
            </div>
            <div className="a-content">{res.answer}</div>
          </div>
        );

        setAnalysis(res);
      } else {
        newAQData[newAQData.length - 1] = (
          <div className="left-box">
            <div className="a-head-img">
              <img src={jiqiren} alt="" className="icon" />
            </div>
            <div className="a-content">未搜索到结果</div>
          </div>
        );

        setAnalysis(analysis);
      }

      setAQData(newAQData);
      setInputValue(undefined);

      setTimeout(() => {
        if (document.getElementById("srcollAQ")) {
          document.getElementById("srcollAQ").scrollTo(0, 100000);
        }
      }, 0);
    }
  };

  return (
    <div className="AQ">
      <div className="title">AnyDATA智能机器人</div>

      <div className="AQ-content">
        <div className="left">
          <div className="AQ-scroll" id="srcollAQ">
            {AQData.map((item) => {
              return item;
            })}
          </div>
          <div className="input-box">
            <Input
              className="input-t"
              placeholder={"输入文字进行对话～"}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button type="primary" className="send" onClick={send}>
              发送
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="title">问答分析</div>

          <div className="tag">分词</div>

          <div className="word-content">{analysis.participle}</div>

          <div className="tag">语义理解</div>

          <div className="l-a">
            {analysis.semantics &&
              analysis.semantics.map((item, index) => {
                return (
                  <div className="l-a-line" key={index.toString()}>
                    <div className="color"></div>
                    <div className="result">{item.result}</div>
                    <div className="type">{item.type}</div>
                    <div className="number">{item.number}</div>
                  </div>
                );
              })}
          </div>

          <div className="tag">出话模块</div>

          <div className="word-content">{analysis.model}</div>

          <div className="tag">关联文档</div>

          <div className="word-content">{analysis.document}</div>
        </div>
      </div>
    </div>
  );
};

export default AQ;

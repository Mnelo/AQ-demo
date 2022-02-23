import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import axios from "axios";
import { getFileEx } from "../../../func/fileExtension";
import jiqiren from "../../../Asset/Image/jiqiren.svg";
import rentou from "../../../Asset/Image/rentou.svg";
import noData from "../../../Asset/Image/zanwuneirong.svg";
import load from "../../../Asset/Image/three-dots.svg";
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
            <div className="a-content">
              <img src={load} alt="" className="load" />
            </div>
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

  /**
   * @description 获取文件后缀图标
   */
  const fileEx = (value) => {
    const word = value.split(".");

    return getFileEx(word[word.length - 1]);
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
          {JSON.stringify(analysis) === "{}" ? (
            <div className="no-data">
              <img src={noData} alt="" />
              <div className="line-one">暂无内容</div>
              <div className="line-two">
                您与小数智能机器人开启对话后，此处将展示对话过程中智能分析的结果
              </div>
            </div>
          ) : (
            <>
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
                        <div className="type">
                          <span className="word">{item.type}</span>
                        </div>
                        <div className="number">{item.number}</div>
                      </div>
                    );
                  })}
              </div>

              <div className="tag">出话模块</div>

              <div className="word-content">{analysis.model}</div>

              <div className="tag">关联文档</div>

              <div className="word-content">
                {analysis.document ? (
                  <img
                    src={fileEx(analysis.document)}
                    alt=""
                    className="icon"
                  />
                ) : null}
                {analysis.document}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AQ;

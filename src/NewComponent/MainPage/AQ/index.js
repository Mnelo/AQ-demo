import React, { useState, useEffect } from "react";
import { Input, Button, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import IconFont from "../../../func/IconFont/index";
import { switchIcon } from "../../../func/SwitchIcon/index";
import jiqiren from "../../../Asset/Image/jiqiren.svg";
import rentou from "../../../Asset/Image/rentou.svg";
import noData from "../../../Asset/Image/zanwuneirong.svg";
import load from "../../../Asset/Image/three-dots.svg";
import "./style.less";

const AQ = () => {
  const [AQData, setAQData] = useState([
    {
      type: "left",
      answer:
        "你好，我是您的智能问答机器人小数，很高兴为您服务。您可以试试点击以下问题：",
      more: [
        "1.小数智能机器人和普通智能机器人有什么区别？",
        "2.小数智能问答机器人能解答哪些问题？",
        "3.小数智能问答机器人适合应用在哪些场景",
      ],
      participle: "",
      semantics: [],
      model: "",
      document: "",
    },
  ]);
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
  const send = async (inputValue) => {
    if (inputValue) {
      let newAQData = [
        ...AQData,
        ...[
          { type: "right", answer: inputValue },
          { type: "left", loading: true, answer: "很抱歉，你的问题我还没有学会，我会继续努力的！", isClick: true },
        ],
      ];

      setAQData(newAQData);
      setInputValue("");

      const res = await getAnswer(inputValue);

      if (res.answer) {
        newAQData[newAQData.length - 1] = res;
      } else {
        newAQData[newAQData.length - 1].loading = false;
      }

      setAnalysis(res);
      setAQData(newAQData);
      setInputValue(undefined);

      setTimeout(() => {
        if (document.getElementById("srcollAQ")) {
          document.getElementById("srcollAQ").scrollTo(0, 100000);
        }
      }, 0);
    }
  };

  const clickStatus = (e, type) => {
    let dom = "";

    if (e.target.nodeName === "svg") {
      dom = e.target;
    } else {
      dom = e.target.parentNode;
    }

    if (dom.style.color === "rgb(18, 110, 227)") {
      dom.style.color = "rgb(0, 0, 0)";

      return;
    }

    if (type === "good") {
      dom.parentNode.nextElementSibling.children[0].style.color =
        "rgb(0, 0, 0)";
    } else {
      dom.parentNode.previousElementSibling.children[0].style.color =
        "rgb(0, 0, 0)";
    }

    dom.style.color = "rgb(18, 110, 227)";
  };

  const getContent = (data) => {
    if (data.type === "left") {
      if (data.loading) {
        return (
          <div className="left-box">
            <div className="a-head-img">
              <img src={jiqiren} alt="" className="icon" />
            </div>
            <div className="a-content">
              <img src={load} alt="" className="load" />
            </div>
          </div>
        );
      }

      return (
        <div className="left-box">
          <div className="a-head-img">
            <img src={jiqiren} alt="" className="icon" />
          </div>
          <div className="a-content">
            <div>{data.answer}</div>
            {data.more &&
              data.more.map((item) => {
                return (
                  <div
                    className="question"
                    key={item}
                    onClick={() => {
                      send(item);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
          </div>

          {data.isClick ? (
            <>
              <IconFont
                type="icon-dianzan"
                className="good"
                onClick={(e) => {
                  clickStatus(e, "good");
                }}
              />

              <IconFont
                type="icon-diancai"
                className="down"
                onClick={(e) => {
                  clickStatus(e, "down");
                }}
              />
            </>
          ) : null}
        </div>
      );
    }

    if (data.type === "right") {
      return (
        <div className="right-box">
          <div className="q-head-img">
            <img src={rentou} alt="" className="icon" />
          </div>
          <div className="q-content">{data.answer}</div>
        </div>
      );
    }
  };

  return (
    <div className="AQ">
      <div className="title">AnyDATA智能机器人</div>

      <div className="AQ-content">
        <div className="left">
          <div className="AQ-scroll" id="srcollAQ">
            {AQData.map((item) => {
              return getContent(item);
            })}
          </div>
          <div className="input-box">
            <Input
              className="input-t"
              placeholder={"输入文字进行对话～"}
              value={inputValue}
              onPressEnter={() => {
                send(inputValue);
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button
              type="primary"
              className="send"
              onClick={() => {
                send(inputValue);
              }}
            >
              发送
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="title">问答分析</div>
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
              <div className="tag">分词</div>
              <div className="word-content">{analysis.participle}</div>
              <div className="tag">
                <span>语义理解</span>
                <Tooltip title="语义理解展现通过NLU和知识网络进行语义分析后提取到的实体、属性和计算意图，并进行打分。">
                  <QuestionCircleOutlined className="que" />
                </Tooltip>
              </div>
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
                        <div className={`number ${item.number < 100 && 'warn'}`}>{item.number}</div>
                      </div>
                    );
                  })}
              </div>
              <div className="tag">出话模块</div>
              <div className="word-content">{analysis.model}</div>
              <div className="tag">关联文档</div>
              <div className="word-content">
                {analysis.document
                  ? switchIcon("file", analysis.document)
                  : null}
                <span className="word">{analysis.document}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AQ;

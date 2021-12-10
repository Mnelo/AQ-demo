import React, { Component } from "react";
import { Input, Button } from "antd";
import jiqiren from "../../Asset/Image/jiqiren.svg";
import rentou from "../../Asset/Image/rentou.svg";
import st from "../../Asset/Image/4-4.svg";
import t1 from "../../Asset/Image/t1.jpg";
import bg from "../../Asset/Image/bg.png";
import word from "../../Asset/Image/word.svg";
import xls from "../../Asset/Image/xls.svg";
import "./style.less";

const { TextArea } = Input;
const color = [
  "#FF8600",
  "#019688",
  "#0091FF",
  "#00FA9A",
  "#BDB76B",
  "#008B8B",
];

class AQ extends Component {
  state = {
    leftC: [],
    inputValue: "",
    rightC: "",
    rightL: [],
    ts: false,
    doc: [],
  };

  sendMessage = () => {
    const { inputValue, leftC } = this.state;

    if (inputValue) {
      this.setState(
        {
          leftC: [...leftC, inputValue],
          inputValue: "",
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }

          setTimeout(() => {
            this.QAR(inputValue);
          }, 300);
        }
      );
    }
  };

  QAR = (inputValue) => {
    const { leftC } = this.state;

    this.setState({
      ts: false,
    });

    if (inputValue.includes("D130H70压缩机的转速是多少")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">400r/min</div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                D130H70
              </div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #0091FF",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                转速
              </div>
              <div>是多少</div>
            </div>
          ),
          rightL: [
            "设备型号=D130H70",
            "设备类型=压缩机",
            "压缩机类型-属性=转速",
          ],
          doc: ["D130H70 说明书.doc"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("晨阳产的压缩机里哪台转速是600r/min")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">ZW-0.84</div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                晨阳
              </div>
              <div>产的</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>里哪台</div>
              <div
                style={{
                  borderBottom: "2px solid #0091FF",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                转速
              </div>
              <div>是</div>
              <div
                style={{
                  borderBottom: "2px solid #00FA9A",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                600rmin
              </div>
              <div>并且用的是</div>
              <div
                style={{
                  borderBottom: "2px solid #00FA9A",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                氢气
              </div>
            </div>
          ),
          rightL: [
            "生产厂商=泰州市晨阳压缩机有限公司",
            "设备类型=压缩机",
            "属性：转速",
            "属性值：600r/min，氢气",
          ],
          doc: ["ZW-0.84 说明书.doc"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("晨阳无油润滑煤气压缩机的注意事项")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box left-box-m">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-m">
                <div>注意事项如下：</div>
                <div>⑴请用户在使用该压缩机之前，必须仔细阅读说明书。</div>
                <div>⑵压缩机不能在高于0.15MPa排气压力下长时间工作。</div>
                <div>⑶只能用无腐蚀性溶液来清洗压缩机和辅助设备。</div>
              </div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                晨阳
              </div>
              <div
                style={{
                  borderBottom: "2px solid #0091FF",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                无油润滑煤气
              </div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #00FA9A",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                注意事项
              </div>
            </div>
          ),
          rightL: [
            "生产厂商=泰州市晨阳压缩机有限公司",
            "设备类型=压缩机",
            "压缩机类型=无油润滑煤气",
            "属性：注意事项",
          ],
          doc: ["无油润滑煤气压缩机设备使用手册.doc"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("编号A0001的压缩机的电机的转速多大")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">设备编号为A0001电动机的转速为740r/min</div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                A0001
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #00FA9A",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                电机
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #0091FF",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                转速
              </div>
              <div>多大</div>
            </div>
          ),
          rightL: ["设备=压缩机", "设备编号=A0001", "属性：转速", "部件=电机"],
          doc: ["LW-44 说明书.doc"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("过去一年LW-44型号压缩机发生过多少次故障")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <>
              <div className="left-box">
                <div className="h-i">
                  <img src={jiqiren} alt="" className="icon" />
                </div>
                <div className="c-c">5</div>
              </div>

              <div className="left-box left-box-t1">
                <div className="h-i">
                  <img src={jiqiren} alt="" className="icon" />
                </div>

                <div className="c-t1">
                  <img src={bg} alt="" className="icon-t1" />
                </div>
              </div>
            </>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                过去一年
              </div>

              <div
                style={{
                  borderBottom: "2px solid #0091FF",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                LW-44
              </div>
              <div>型号</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>发生过多少次故障</div>
            </div>
          ),
          rightL: [
            "日期：2021年1月-2021年12月",
            "设备类型=压缩机",
            "设备型号= LW-44",
          ],
          doc: ["设备故障信息表.xlsx"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("哪一台压缩机的进气量比较大")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">ZW-0.84</div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              {/* "哪一/台/压缩机/的/进气量/比较/大" */}
              <div>哪一台</div>
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                进气量
              </div>
              <div>比较大</div>
            </div>
          ),
          rightL: ["设备类型= 压缩机", "属性=进气量"],
          doc: ["LW-44 说明书.doc", "ZW-0.84 说明书.doc", "D130H70 说明书.doc"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("D130H70与LW-44压缩机分别用了什么电动机")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box left-box-t">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-t">
                <div className="line">
                  <div className="box box-1">设备</div>
                  <div className="box box-2">设备型号</div>
                  <div className="box box-3">电机型号</div>
                  <div className="box box-4">转速</div>
                </div>
                <div className="line">
                  <div className="box box-1">压缩机</div>
                  <div className="box box-2">D130H70</div>
                  <div className="box box-3">YB2-280S-6</div>
                  <div className="box box-4">980r/min</div>
                </div>
                <div className="line">
                  <div className="box box-1">压缩机</div>
                  <div className="box box-2">LW-44</div>
                  <div className="box box-3">YB2-280S-8</div>
                  <div className="box box-4">740r/min</div>
                </div>
              </div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                D130H70
              </div>
              <div>与</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                LW-44
              </div>
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>分别用了什么</div>
              <div
                style={{
                  borderBottom: "2px solid #0091FF",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                电动机
              </div>
              <div
                style={{
                  borderBottom: "2px solid #00FA9A",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                转速
              </div>
              <div>是多少</div>
            </div>
          ),
          rightL: [
            "设备类型= 压缩机",
            "设备型号=D130H70， LW-44",
            "部件=电机",
            "属性：转速",
          ],
          doc: ["D130H70 说明书.doc", "LW-44 说明书.doc"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("张三管理着哪些型号的设备")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">LW-44型压缩机；D130H70型压缩机</div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                张三
              </div>
              <div>管理着哪些</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                型号
              </div>
              <div>的设备</div>
            </div>
          ),
          rightL: ["责任人：张三", "属性：型号"],
          ts: true,
          doc: ["设备运维信息表.xlsx"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("我们这个压缩机的生产厂商是哪个")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">
                请问您是指哪个设备编号或设备型号的机器？
              </div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div>我们这个</div>
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                压缩机
              </div>
              <div>的</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                生产厂商
              </div>
              <div>是哪个</div>
            </div>
          ),
          rightL: ["设备类型=压缩机", "属性=生产厂商"],
          doc: [],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("型号为D130H70的")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-c">北京天高隔膜压缩机有限公司</div>
            </div>,
          ],
          rightC: (
            <div className="ml">
              <div className="fc">
                <div>我们这个</div>
                <div
                  style={{
                    borderBottom: "2px solid #FF8600",
                    marginRight: "4px",
                    marginLeft: "4px",
                  }}
                >
                  压缩机
                </div>
                <div>的</div>
                <div
                  style={{
                    borderBottom: "2px solid #0091FF",
                    marginRight: "4px",
                    marginLeft: "4px",
                  }}
                >
                  生产厂商
                </div>
                <div>是哪个</div>
              </div>
              <div className="fc fc-s">
                <div>型号为</div>
                <div
                  style={{
                    borderBottom: "2px solid #019688",
                    marginRight: "4px",
                    marginLeft: "4px",
                  }}
                >
                  D130H70
                </div>
                <div>的</div>
              </div>
            </div>
          ),
          rightL: ["设备类型=压缩机", "设备型号= D130H70", "属性=生产厂商"],
          doc: ["设备信息表.xlsx"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    if (inputValue.includes("张三管理的设备各型号的数量")) {
      this.setState(
        {
          leftC: [
            ...leftC,
            <div className="left-box left-box-t1">
              <div className="h-i">
                <img src={jiqiren} alt="" className="icon" />
              </div>
              <div className="c-t1">
                <img src={t1} alt="" className="icon-t1" />
              </div>
            </div>,
          ],
          rightC: (
            <div className="fc">
              <div
                style={{
                  borderBottom: "2px solid #FF8600",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                张三
              </div>
              <div>管理的设备各</div>
              <div
                style={{
                  borderBottom: "2px solid #019688",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                型号
              </div>
              <div>的数量</div>
            </div>
          ),
          rightL: ["责任人：张三", "属性：型号"],
          doc: ["设备运维信息表.xlsx"],
        },
        () => {
          if (document.getElementById("srollB")) {
            document.getElementById("srollB").scrollTo(0, 100000);
          }
        }
      );

      return;
    }

    this.setState(
      {
        leftC: [
          ...leftC,
          <div className="left-box">
            <div className="h-i">
              <img src={jiqiren} alt="" className="icon" />
            </div>
            <div className="c-c">无内容</div>
          </div>,
        ],
        rightL: [],
        doc: [],
        rightC: [],
      },
      () => {
        if (document.getElementById("srollB")) {
          document.getElementById("srollB").scrollTo(0, 100000);
        }
      }
    );
  };

  render() {
    const { inputValue, leftC, rightC, rightL, ts, doc } = this.state;

    return (
      <div className="aq">
        <div className="left">
          <div className="title">
            <img src={jiqiren} alt="" className="icon" />
            <span className="word">AnyDATA智能机器人</span>
          </div>

          <div className="content" id="srollB">
            <div className="l-1">
              <div>
                <img src={jiqiren} alt="" className="icon" />
              </div>

              <div className="t-s">
                <div className="t-s-1">
                  你好～，我是小D。欢迎你使用AnyDATA智能机器人！您可以试试点击以下问题：
                </div>

                <div className="t-s-c">1.AnyDATA智能机器人是什么？</div>
                <div className="t-s-c">
                  2.AnyDATA智能机器人可以运用在什么场景下？
                </div>
                <div className="t-s-c">3.如何使用AnyDATA智能机器人？</div>
                <div className="t-s-c">4.分词详情如何查看？</div>
              </div>
            </div>

            <div className="l-2">
              {leftC.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div className="right-box" key={index.toString()}>
                      <div className="h">
                        <img src={rentou} alt="" className="icon" />
                      </div>

                      <div className="r-b-c">{item}</div>
                    </div>
                  );
                }

                return item;
              })}
            </div>
          </div>

          <div className="input-t">
            <TextArea
              className="input-tt"
              placeholder={"输入文字进行对话～"}
              value={inputValue}
              onChange={(e) => {
                this.setState({
                  inputValue: e.target.value,
                });
              }}
            />
          </div>

          <div className="send">
            <Button
              type="primary"
              onClick={() => {
                this.sendMessage();
              }}
            >
              发送{""}
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="w-1">{rightC}</div>
          <div className="title t-m">语义理解</div>
          {rightL.map((item, index) => {
            return (
              <div className="l-m" key={index.toString()}>
                <div className="l-f" style={{ background: color[index] }}></div>
                <div className="content">{item}</div>
              </div>
            );
          })}

          <div className="title t-m">关联文档</div>

          {doc.map((item, index) => {
            return (
              <div className="l-m" key={index.toString()}>
                <div className="l-t-t">
                  {item.includes("doc") ? (
                    <img src={word} alt="" className="t" />
                  ) : (
                    <img src={xls} alt="" className="t" />
                  )}
                </div>
                <div className="content" key={index.toString()}>
                  {item}
                </div>
              </div>
            );
          })}

          {ts ? (
            <>
              <div className="title t-m">图谱</div>

              <div className="tu">
                <img src={st} alt="" className="icon" />
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AQ;

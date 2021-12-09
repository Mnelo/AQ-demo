import React, { Component } from "react";
import "./style.less";

class Page5 extends Component {
  render() {
    return (
      <div className="page5">
        <div className="head">
          <div className="return">
            <span
              className="word"
              onClick={() => {
                this.props.setContent(4);
              }}
            >
              返回
            </span>
          </div>
        </div>

        <div className="content">
          <div className="left">
            <div className="title">撞击试验中出现的问题</div>

            <div className="name">现象描述</div>

            <div className="des">
              在多轮测试环节出现这样的错误，主要表现为黑斑现象，经过反复检验和对化学成分的分析，可以进一步知道是锂
              离子。实验现象实验现象实验现象实验现象实验现象实验现象实验现象
            </div>

            <div className="name">产生原因</div>

            <div className="des">
              在多轮测试环节出现这样的错误，主要表现为备份
            </div>

            <div className="name">改进方法</div>

            <div className="des">1.改进方法改进方法改进方法改进方法改进</div>

            <div className="name">风险评估</div>

            <div className="des">该实验过程中出现的问题风险很大且会造成人</div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default Page5;

import React, { Component } from "react";
import { Button, Input } from "antd";
import "./style.less";

const { TextArea } = Input;

class Page2 extends Component {
  render() {
    return (
      <div className="page2">
        <div className="title">新建FQ</div>

        <div className="name">
          <label className="label-f">名称</label>
        </div>

        <div className="input">
          <Input className="input-f" placeholder={"请输入"} />
        </div>

        <div className="name">
          <label className="label-f">项目代号</label>
        </div>

        <div className="input">
          <Input className="input-f" placeholder={"请输入"} />
        </div>

        <div className="name">
          <label className="label-f">问题描述</label>
        </div>

        <div className="input">
          <TextArea className="input-t" placeholder={"请输入具体问题"} />
        </div>

        <div className="bottom">
          <Button
            className="b-1"
            onClick={() => {
              this.props.setContent(1);
            }}
          >
            返回{" "}
          </Button>
          <Button
            type="primary"
            className="b-2"
            onClick={() => {
              this.props.setContent(3);
            }}
          >
            自动分析
          </Button>
        </div>
      </div>
    );
  }
}

export default Page2;

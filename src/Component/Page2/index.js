import React, { Component } from "react";
import { Button, Input } from "antd";
import "./style.less";

class Page2 extends Component {
  render() {
    return (
      <div className="page2">
        <div className="title">新建FA</div>

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
          <label className="label-f">创建人</label>
        </div>

        <div className="input">
          <Input className="input-f" placeholder={"请输入"} />
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
              this.props.setContent(7);
            }}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }
}

export default Page2;

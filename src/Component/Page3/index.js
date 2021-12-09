import React, { Component } from "react";
import { Button, Input } from "antd";
import EditD from "../../Asset/Image/EditD.svg";
import "./style.less";

const { TextArea } = Input;

class Page3 extends Component {
  render() {
    return (
      <div className="page3">
        <div className="title">问题描述</div>
        <div className="input">
          <TextArea
            className="input-t"
            defaultValue={
              "12月13号，1号产线在多轮循环测试的时候，测试出一批有黑斑的手机电芯。初步查验，黑斑的主要成分是石墨，锂离子未嵌满"
            }
          />
        </div>

        <div>
          <Button type="primary" className="b-2">
            自动分析
          </Button>
        </div>

        <div className="t-1">检测信息</div>

        <div className="b-1">
          <div className="i-s">
            <div className="i-f">失效现象</div>
            <Input className="input-f" defaultValue={"黑斑"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">失效产品</div>
            <Input className="input-f" defaultValue={"手机电芯"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s">
            <div className="i-f">探测方法</div>
            <Input className="input-f" defaultValue={"多功能循环测试"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">物料</div>
            <Input className="input-f" defaultValue={"石墨、锂"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s">
            <div className="i-f">产线</div>
            <Input className="input-f" defaultValue={"1号"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">日期</div>
            <Input className="input-f" defaultValue={"12月13日"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>
        </div>

        <div className="t-1">补充信息</div>

        <div className="b-1">
          <div className="i-s">
            <div className="i-f">失效模式</div>
            <Input className="input-f" />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">产品</div>
            <Input className="input-f" />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s">
            <div className="i-f">设备</div>
            <Input className="input-f" />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">工艺</div>
            <Input className="input-f" />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s">
            <div className="i-f">解决方案</div>
            <Input className="input-f" />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">工序</div>
            <Input className="input-f" />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>
        </div>

        <div className="b-b">
          <Button
            className="b-l"
            onClick={() => {
              this.props.setContent(2);
            }}
          >
            上一步
          </Button>
          <Button
            type="primary"
            className="b-3"
            onClick={() => {
              this.props.setContent(4);
            }}
          >
            下一步
          </Button>
        </div>
      </div>
    );
  }
}

export default Page3;

import React, { Component } from "react";
import { Button, Input } from "antd";
import pdf from "../../Asset/Image/pdf.svg";
import ppt from "../../Asset/Image/ppt.svg";
import txt from "../../Asset/Image/txt.svg";
import word from "../../Asset/Image/word.svg";
import "./style.less";

class Page4 extends Component {
  render() {
    return (
      <div className="page4">
        <div className="left">
          <div className="title">问题描述</div>
          <div className="des">
            12月3号，5号产线在多轮测试的时候，测试出一批有
            黑斑的手机电芯。初步查验，黑斑的主要成分是石墨， 锂离子
          </div>

          <div className="i-s">
            <div className="i-f">失效现象</div>
            <Input className="input-f" defaultValue={"黑斑"} />
          </div>

          <div className="i-s">
            <div className="i-f">探测方法</div>
            <Input className="input-f" defaultValue={"多功能循环测试"} />
          </div>

          <div className="i-s">
            <div className="i-f">产线</div>
            <Input className="input-f" defaultValue={"1号"} />
          </div>

          <div className="i-s">
            <div className="i-f">失效产品</div>
            <Input className="input-f" defaultValue={"手机电芯"} />
          </div>

          <div className="i-s">
            <div className="i-f">物料</div>
            <Input className="input-f" defaultValue={"石墨、锂"} />
          </div>

          <div className="i-s">
            <div className="i-f">日期</div>
            <Input className="input-f" defaultValue={"12月13日"} />
          </div>

          <div className="i-s">
            <div className="i-f">设备</div>
            <Input className="input-f" defaultValue={"A121"} />
          </div>
        </div>
        <div className="cent"></div>
        <div className="right">
          <div className="title">相关案例</div>

          <div
            className="line"
            onClick={() => {
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={ppt} alt="" />
            </div>

            <div className="word">多轮测试的实验结果.pdf</div>
          </div>

          <div
            className="line"
            onClick={() => {
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={pdf} alt="" />
            </div>

            <div className="word">黑斑产生的原因原因.pdf</div>
          </div>

          <div
            className="line"
            onClick={() => {
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={txt} alt="" />
            </div>

            <div className="word">如何分辨不同的黑斑.txt</div>
          </div>

          <div
            className="line"
            onClick={() => {
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={word} alt="" />
            </div>

            <div className="word">黑斑会给后续测试结果带来什么影响.pdf</div>
          </div>
        </div>
        <div className="bottom">
          <Button
            className="b-l"
            onClick={() => {
              this.props.setContent(3);
            }}
          >
            上一步
          </Button>

          <Button className="b-w" type="primary">
            完成{""}
          </Button>
        </div>
      </div>
    );
  }
}

export default Page4;

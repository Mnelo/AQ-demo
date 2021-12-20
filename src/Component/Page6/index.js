import React, { Component } from "react";
import { Button, Input } from "antd";
import G6Graph from "../G6Graph";
import store from "storejs";
import pdf from "../../Asset/Image/pdf.svg";
import ppt from "../../Asset/Image/ppt.svg";
import txt from "../../Asset/Image/txt.svg";
import word from "../../Asset/Image/word.svg";
import "./style.less";

const { TextArea } = Input;

class Page6 extends Component {
  state = {
    showGraph: false,
  };

  render() {
    const { showGraph } = this.state;

    return (
      <div className="page6">
        <div className="left">
          <div className="b-1">
            <div className="b-w">背景</div>
            <div className="s-s-1">
              <div className="i-s">
                <div className="i-f">What</div>
                <Input className="input-f" defaultValue={""} />
              </div>
              <div className="i-s">
                <div className="i-f">When</div>
                <Input className="input-f" defaultValue={""} />
              </div>
              <div className="i-s">
                <div className="i-f">Where</div>
                <Input className="input-f" defaultValue={""} />
              </div>
              <div className="i-s">
                <div className="i-f">Who</div>
                <Input className="input-f" defaultValue={""} />
              </div>
              <div className="i-s">
                <div className="i-f">Why</div>
                <Input className="input-f" defaultValue={""} />
              </div>
              <div className="i-s">
                <div className="i-f">How</div>
                <Input className="input-f" defaultValue={""} />
              </div>
              <div className="i-s">
                <div className="i-f">How much</div>
                <Input className="input-f" defaultValue={""} />
              </div>
            </div>
          </div>

          <div className="b-2">
            <div className="b-w">风险评估</div>
            <div className="t-1">
              <div className="c-1">风险识别</div>
              <div className="c-2">风险评估</div>
            </div>

            <div className="t-2">
              <div className="t-c">风险事件</div>
              <div className="t-c">风险类型</div>
              <div className="t-c">风险概率P</div>
              <div className="t-c">影响程度I</div>
              <div className="t-c">风险值P*I</div>
              <div className="t-c">风险等级</div>
            </div>

            <div className="t-2">
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
            </div>

            <div className="t-2">
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
              <div className="t-i">
                <Input bordered={false} />
              </div>
            </div>
          </div>

          <div className="b-3">
            <div className="b-w">止血措施</div>
            <TextArea
              className="input-t"
              defaultValue={
                "12月20日，发现一批手机电芯产生的气体增加，经进行水含量测试，发现其主要原因是电解液水分超标导致电解液氢氟酸含量超高"
              }
            />
          </div>

          <div className="d-b">
            <Button
              type="primary"
              className="b"
              onClick={() => {
                this.setState({
                  showGraph: true,
                });
              }}
            >
              失效分析
            </Button>

            <Button
              className="b"
              onClick={() => {
                this.props.setContent(8);
              }}
            >
              下一步
            </Button>
          </div>
        </div>

        <div className="right">
          <div className="b-w">失效原因分析</div>
          {showGraph ? <G6Graph /> : null}
        </div>

        <div className="list">
          <div className="title">相关案例</div>

          <div
            className="line"
            onClick={() => {
              store.set("anylist", "1");
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={ppt} alt="" />
            </div>

            <div className="word">水含量测试的实验结果.pdf</div>
          </div>

          <div
            className="line"
            onClick={() => {
              store.set("anylist", "1");
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={pdf} alt="" />
            </div>

            <div className="word">循环衰减快产生的原因.pdf</div>
          </div>

          <div
            className="line"
            onClick={() => {
              store.set("anylist", "1");
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={txt} alt="" />
            </div>

            <div className="word">如何分辨不同的循环衰减快.txt</div>
          </div>

          <div
            className="line"
            onClick={() => {
              store.set("anylist", "1");
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={word} alt="" />
            </div>

            <div className="word">循环衰减快带来什么影响.pdf</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page6;

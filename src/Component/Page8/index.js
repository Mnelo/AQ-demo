import React, { Component } from "react";
import { Input } from "antd";
import G6Graph from "../G6Graph";
import store from "storejs";
import pdf from "../../Asset/Image/pdf.svg";
import ppt from "../../Asset/Image/ppt.svg";
import txt from "../../Asset/Image/txt.svg";
import word from "../../Asset/Image/word.svg";
import tu from "../../Asset/Image/tu.png";
import "./style.less";

const { TextArea } = Input;

class Page8 extends Component {
  render() {
    return (
      <div className="page8">
        <div className="title">FA分析报告</div>
        <div className="title">背景</div>
        <div className="s-s-1">
          <div className="i-s">
            <div className="i-f">What</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="在什么条件产生什么问题"
            />
          </div>
          <div className="i-s">
            <div className="i-f">When</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="什么时候发生的"
            />
          </div>
          <div className="i-s">
            <div className="i-f">Where</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="在哪儿在什么环境下发生的"
            />
          </div>
          <div className="i-s">
            <div className="i-f">Who</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="当事人或者主导方是谁"
            />
          </div>
          <div className="i-s">
            <div className="i-f">Why</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="客户或内部为何提出问题"
            />
          </div>
          <div className="i-s">
            <div className="i-f">How</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="问题是怎样发生的"
            />
          </div>
          <div className="i-s">
            <div className="i-f">How much</div>
            <Input
              className="input-f"
              defaultValue={""}
              placeholder="发生问题的量化比例"
            />
          </div>

          <img className="icon-tu" src={tu} alt="" />
        </div>

        <div className="title">风险评估</div>

        <div className="b-2">
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

        <div className="title">止血措施</div>
        <div className="b-3">
          <TextArea
            className="input-t"
            placeholder={
              "可参考历史案例常用的有效措施，如：sorting、返工、收紧规格、暂停生产或发货、降低充放电倍率或电压窗口、产品召回"
            }
          />
        </div>

        <div className="right">
          <div className="b-w">失效原因分析</div>
          <G6Graph />
        </div>

        <div className="table">
          <div className="title">FA checklist</div>

          <div className="line">
            <div className="t">FA checklist</div>
            <div className="t">FA result</div>
            <div className="t">Status</div>
            <div className="t">Owner</div>
            <div className="t">Due date</div>
          </div>

          <div className="line">
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
          </div>

          <div className="line">
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
          </div>

          <div className="line">
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
            <div className="row">
              <Input bordered={false} />
            </div>
          </div>
        </div>

        <div className="cent">
          <div className="tent">
            <div className="title">失效机理</div>
            <div className="m-t">失效机理假设</div>
            <div className="t-w">
              <TextArea
                className="t-a"
                placeholder="通过原因分析排查，输出关键的失效假设机理可结合力学、机械、热学等模拟仿真加以佐证失效机理提出失效机理假设时，推导过程严谨、完整、符合基本原理"
              />
            </div>
            <div lassName="m-t">失效机理验证</div>
            <div className="t-w">
              <TextArea
                className="t-a"
                placeholder={
                  "设计实验对失效原因进行验证，可根据实际需要选择重现失效或规避失效常用实验设计方法，有单因子实验、多因子实验、模拟验证等设计的实验需排查干扰因素确保可靠性若验证实验无法重现失效或者规避失效的话，需再次排查失效原因，找到关键的失效因子和假设建议优先进行单因子实验"
                }
              />
            </div>
            <div lassName="m-t">改善方案</div>
            <div className="t-w">
              <TextArea
                className="t-a"
                placeholder={
                  "设计实验对失效原因进行验证，可根据实际需要选择重现失效或规避失效常用实验设计方法，有单因子实验、多因子实验、模拟验证等设计的实验需排查干扰因素确保可靠性若验证实验无法重现失效或者规避失效的话，需再次排查失效原因，找到关键的失效因子和假设建议优先进行单因子实验"
                }
              />
            </div>
          </div>

          <div className="tent">
            <div className="title">实验验证</div>
            <div lassName="m-t">短期验证过程</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
            <div lassName="m-t">短期验证结果</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
            <div lassName="m-t">长期验证过程</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
            <div lassName="m-t">长期验证结果</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
          </div>

          <div className="tent">
            <div className="title">结论</div>
            <div lassName="m-t">FA分析结论</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
            <div lassName="m-t">失效机理假设</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
            <div lassName="m-t">改善措施</div>
            <div className="t-w">
              <TextArea className="t-a" />
            </div>
          </div>

          <div className="tent">
            <div className="title">Lesson learn</div>
            <div className="t-w margin-top">
              <TextArea className="t-a" />
            </div>
          </div>
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

export default Page8;

import React, { Component } from "react";
import { Button, Input } from "antd";
import "./style.less";

const { TextArea } = Input;

class Page7 extends Component {
  render() {
    return (
      <div className="page7">
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

        <div className="b-b">
          <Button className="b-b-b" type="primary">
            完成
          </Button>

          <Button className="b-b-b">导出</Button>
        </div>
      </div>
    );
  }
}

export default Page7;

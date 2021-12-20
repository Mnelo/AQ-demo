import React, { Component } from "react";
import { Button, Input, Select } from "antd";
import store from "storejs";
import EditD from "../../Asset/Image/EditD.svg";
import "./style.less";

const { TextArea } = Input;
const { Option } = Select;

class Page3 extends Component {
  render() {
    return (
      <div className="page3">
        <div className="title">问题描述</div>
        <div className="input">
          <TextArea
            className="input-t"
            defaultValue={
              "12月20日，发现一批手机电芯产生的气体增加，经进行水含量测试，发现其主要原因是电解液水分超标导致电解液氢氟酸含量超高"
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
            <div className="i-f">失效机理</div>
            <Input className="input-f" defaultValue={"水含量超标"} />
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
            <div className="i-f">伴随现象</div>
            <Input className="input-f" defaultValue={"产气"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s i-s-r">
            <div className="i-f">料</div>
            <Input className="input-f" defaultValue={"电解液HF高"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>

          <div className="i-s">
            <div className="i-f">探测方法</div>
            <Input className="input-f" defaultValue={"水含量测试"} />
            <div className="icon">
              <img className="icon-i" src={EditD} alt="" />
            </div>
          </div>
        </div>

        <div className="t-1">补充信息</div>

        <div className="b-1">
          <div className="i-s">
            <div className="i-f">编码</div>
            <Select
              className="select-f"
              onChange={(value) => {
                store.set("selectV", value);
              }}
            >
              <Option value={"LI-001"}>LI-001</Option>
              <Option value={"LI-002"}>LI-002</Option>
              <Option value={"LI-003"}>LI-003</Option>
            </Select>
          </div>

          {/* <div className="i-s i-s-r">
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
          </div> */}
        </div>

        <div className="b-b">
          {/* <Button
            className="b-l"
            onClick={() => {
              this.props.setContent(2);
            }}
          >
            上一步
          </Button> */}
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

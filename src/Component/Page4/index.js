import React, { Component } from "react";
import { Button, Input } from "antd";
import store from "storejs";
// import D3Graph from "../D3Graph";
import G6Graph from "../G6Graph";
import pdf from "../../Asset/Image/pdf.svg";
import ppt from "../../Asset/Image/ppt.svg";
import txt from "../../Asset/Image/txt.svg";
import word from "../../Asset/Image/word.svg";
import "./style.less";

// const nodes = [
//   { name: "黑斑", color: "#2A908F", n: 0 },
//   { name: "探索方法", color: "#E8D12C", n: 1 },
//   { name: "产线", color: "#557EE8", n: 2 },
//   { name: "手机电芯", color: "#A5A8B4", n: 3 },
//   { name: "物料", color: "#2A908F", n: 4 },
//   { name: "日期", color: "#B0C952", n: 5 },
//   { name: "部门", color: "#7250A0", n: 6 },
//   { name: "客户", color: "#DA4454", n: 7 },
//   { name: "设备", color: "#F39223", n: 8 },
//   { name: "产品", color: "#68798E", n: 9 },
//   { name: "FA", color: "#54639C", n: 10 },
// ];
// const edges = [
//   {
//     target: 0,
//     source: 1,
//     lineLength: 200,
//     color: "#E8D12C",
//     edge_id: 0,
//     name: "出现",
//   },
//   {
//     target: 1,
//     source: 2,
//     lineLength: 200,
//     color: "#557EE8",
//     edge_id: 1,
//     name: "运用",
//   },
//   {
//     target: 2,
//     source: 3,
//     lineLength: 200,
//     color: "#A5A8B4",
//     edge_id: 3,
//     name: "发生位置",
//   },
//   {
//     target: 3,
//     source: 4,
//     lineLength: 200,
//     color: "#2A908F",
//     edge_id: 4,
//     name: "运用",
//   },
//   {
//     target: 5,
//     source: 4,
//     lineLength: 200,
//     color: "#2A908F",
//     edge_id: 5,
//     name: "日期",
//   },
//   {
//     target: 5,
//     source: 6,
//     lineLength: 200,
//     color: "#7250A0",
//     edge_id: 6,
//     name: "发现",
//   },
//   {
//     target: 7,
//     source: 6,
//     lineLength: 200,
//     color: "#7250A0",
//     edge_id: 7,
//     name: "服务于",
//   },
//   {
//     target: 4,
//     source: 7,
//     lineLength: 200,
//     color: "#DA4454",
//     edge_id: 8,
//     name: "提供",
//   },
//   {
//     target: 10,
//     source: 7,
//     lineLength: 200,
//     color: "#DA4454",
//     edge_id: 9,
//     name: "无关",
//   },
//   {
//     target: 2,
//     source: 7,
//     lineLength: 200,
//     color: "#DA4454",
//     edge_id: 10,
//     name: "关联",
//   },
//   {
//     target: 1,
//     source: 7,
//     lineLength: 200,
//     color: "#DA4454",
//     edge_id: 11,
//     name: "无关",
//   },
//   {
//     target: 8,
//     source: 9,
//     lineLength: 200,
//     color: "#68798E",
//     edge_id: 12,
//     name: "无关",
//   },
//   {
//     target: 9,
//     source: 10,
//     lineLength: 200,
//     color: "#54639C",
//     edge_id: 13,
//     name: "关联",
//   },
//   {
//     target: 8,
//     source: 4,
//     lineLength: 200,
//     color: "#2A908F",
//     edge_id: 14,
//     name: "运用",
//   },
//   {
//     target: 1,
//     source: 4,
//     lineLength: 200,
//     color: "#2A908F",
//     edge_id: 15,
//     name: "被检测",
//   },
//   {
//     target: 1,
//     source: 10,
//     lineLength: 200,
//     color: "#54639C",
//     edge_id: 16,
//     name: "利用",
//   },
// ];

class Page4 extends Component {
  render() {
    return (
      <div className="page4">
        <div className="left">
          <div className="title">问题描述</div>
          <div className="des">
            12月20日，发现一批手机电芯产生的气体增加，经进行水含量测试，发现其主要原因是电解液水分超标导致电解液氢氟酸含量超高
          </div>

          <div className="i-s">
            <div className="i-f">失效机理</div>
            <Input className="input-f" defaultValue={"水含量超标"} />
          </div>

          <div className="i-s">
            <div className="i-f">失效产品</div>
            <Input className="input-f" defaultValue={"手机电芯"} />
          </div>

          <div className="i-s">
            <div className="i-f">伴随现象</div>
            <Input className="input-f" defaultValue={"产气"} />
          </div>

          <div className="i-s">
            <div className="i-f">料</div>
            <Input className="input-f" defaultValue={"电解液HF高"} />
          </div>

          <div className="i-s">
            <div className="i-f">探测方法</div>
            <Input className="input-f" defaultValue={"水含量测试"} />
          </div>

          <div className="i-s">
            <div className="i-f">编码</div>
            <Input className="input-f" defaultValue={store.get("selectV")} />
          </div>
        </div>

        <div className="cent">
          <G6Graph />
        </div>
        <div className="right">
          <div className="title">相关案例</div>

          <div
            className="line"
            onClick={() => {
              store.set("anylist", "2");
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
              store.set("anylist", "2");
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
              store.set("anylist", "2");
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
              store.set("anylist", "2");
              this.props.setContent(5);
            }}
          >
            <div className="icon">
              <img className="icon-i" src={word} alt="" />
            </div>

            <div className="word">循环衰减快带来什么影响.pdf</div>
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

          {/* <Button className="b-w" type="primary">
            完成{""}
          </Button> */}
        </div>
      </div>
    );
  }
}

export default Page4;

import React, { Component } from "react";
import store from "storejs";
// import D3Graph from "../D3Graph";
import G6Graph from "../G6Graph";
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

class Page5 extends Component {
  render() {
    return (
      <div className="page5">
        <div className="head">
          <div className="return">
            <span
              className="word"
              onClick={() => {
                if (store.get("anylist") === "1") {
                  this.props.setContent(7);
                } else {
                  this.props.setContent(4);
                }
              }}
            >
              返回
            </span>
          </div>
        </div>

        <div className="content">
          <div className="left">
            <div className="title">黑斑后续测试结果</div>

            <div className="name">现象描述</div>

            <div className="des">
              在鉴定样品制作（FSNC阳极）过程中，经常在阳极表面观察到黑斑现象。没有证据表明与阳极配方有任何相关性，例如59#、96.0%或96.8%的加载配方。严重时在黑点上或周围发现白色斑点黑点上有覆盖物，仔细观察，在阳极上的阴极面toblask
              spoy上发现对称黑点
            </div>

            <div className="name">产生原因</div>

            <div className="des">隔膜阻抗分布不均匀</div>

            <div className="name">改进方法</div>

            <div className="des">
              <div>1.阳极不应过度干燥过干燥的阳极MRB</div>
              <div>2夹具烘烤工艺</div>
              <div>夹具烘烤力{"<"}1.0 Mpa</div>
              <div>严格的过程控制，测试10个夹具</div>
              <div>使用新的硅橡胶，可以使烘烤力更均匀</div>
              <div>3.分离器的Gurley值应尽可能小</div>
              <div>特别适用于分离器涂层工艺</div>
              <div>Li+电导率和Gurley之间的相关性是什么</div>
              <div>夹钳烘烤力后分离器的Li+电导率需要进一步研究</div>
              <div>4.分离器分切张力{"<"}1.0，优化相间透过率</div>
            </div>

            <div className="name">风险评估</div>

            <div className="des">
              黑斑多见于45℃周期快衰落细胞；作为比较，正常衰落小区没有黑点。从这个角度来看，黑斑现象预示着高温下的快速褪色。
            </div>
          </div>
          <div className="right">
            <G6Graph />
          </div>
        </div>
      </div>
    );
  }
}

export default Page5;

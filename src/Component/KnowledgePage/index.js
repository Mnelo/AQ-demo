import React, { Component } from "react";
import { Input, Button, Tabs } from "antd";
import D3Graph from "../D3Graph";
import nofont from "./../../Asset/Image/notFount.svg";
import pdf from "./../../Asset/Image/pdf.svg";
import txt from "./../../Asset/Image/txt.svg";
import "./index.less";

const { TabPane } = Tabs;

const nodes = [
  { name: "黑斑", color: "#2A908F", n: 0 },
  { name: "探索方法", color: "#E8D12C", n: 1 },
  { name: "产线", color: "#557EE8", n: 2 },
  { name: "手机电芯", color: "#A5A8B4", n: 3 },
  { name: "物料", color: "#2A908F", n: 4 },
  { name: "日期", color: "#B0C952", n: 5 },
  { name: "部门", color: "#7250A0", n: 6 },
  { name: "客户", color: "#DA4454", n: 7 },
  { name: "设备", color: "#F39223", n: 8 },
  { name: "产品", color: "#68798E", n: 9 },
  { name: "FA", color: "#54639C", n: 10 },
];
const edges = [
  {
    target: 0,
    source: 1,
    lineLength: 200,
    color: "#E8D12C",
    edge_id: 0,
    name: "出现",
  },
  {
    target: 1,
    source: 2,
    lineLength: 200,
    color: "#557EE8",
    edge_id: 1,
    name: "运用",
  },
  {
    target: 2,
    source: 3,
    lineLength: 200,
    color: "#A5A8B4",
    edge_id: 3,
    name: "发生位置",
  },
  {
    target: 3,
    source: 4,
    lineLength: 200,
    color: "#2A908F",
    edge_id: 4,
    name: "运用",
  },
  {
    target: 5,
    source: 4,
    lineLength: 200,
    color: "#2A908F",
    edge_id: 5,
    name: "日期",
  },
  {
    target: 5,
    source: 6,
    lineLength: 200,
    color: "#7250A0",
    edge_id: 6,
    name: "发现",
  },
  {
    target: 7,
    source: 6,
    lineLength: 200,
    color: "#7250A0",
    edge_id: 7,
    name: "服务于",
  },
  {
    target: 4,
    source: 7,
    lineLength: 200,
    color: "#DA4454",
    edge_id: 8,
    name: "提供",
  },
  {
    target: 10,
    source: 7,
    lineLength: 200,
    color: "#DA4454",
    edge_id: 9,
    name: "无关",
  },
  {
    target: 2,
    source: 7,
    lineLength: 200,
    color: "#DA4454",
    edge_id: 10,
    name: "关联",
  },
  {
    target: 1,
    source: 7,
    lineLength: 200,
    color: "#DA4454",
    edge_id: 11,
    name: "无关",
  },
  {
    target: 8,
    source: 9,
    lineLength: 200,
    color: "#68798E",
    edge_id: 12,
    name: "无关",
  },
  {
    target: 9,
    source: 10,
    lineLength: 200,
    color: "#54639C",
    edge_id: 13,
    name: "关联",
  },
  {
    target: 8,
    source: 4,
    lineLength: 200,
    color: "#2A908F",
    edge_id: 14,
    name: "运用",
  },
  {
    target: 1,
    source: 4,
    lineLength: 200,
    color: "#2A908F",
    edge_id: 15,
    name: "被检测",
  },
  {
    target: 1,
    source: 10,
    lineLength: 200,
    color: "#54639C",
    edge_id: 16,
    name: "利用",
  },
];

class KnowledgePage extends Component {
  state = {
    empty: true,
    list: [], //搜索结果list
    detailsList: [], //知识详情列表
    recomList: [], // 案例推荐列表
  };

  inputRef = React.createRef(); //绑定输入框

  search = () => {
    this.setState({
      empty: true, //默认输入为空
    });

    const value = this.inputRef.current.state.value;
    if (value) {
      this.setState({
        empty: false,
        list: [
          {
            title: "隔膜阻抗分布不均匀",
            desc: "这个问题大多数出现在轮测阶段，该现象并不会爆发性的出现",
          },
          {
            title: "极片厚度不均匀",
            desc: "这个问题大多数出现在轮测阶段，该现象并不会爆发性的出现",
          },
          {
            title: "突发性的断电",
            desc: "这个问题大多数出现在轮测阶段，该现象并不会爆发性的出现",
          },
          {
            title: "空气过于潮湿或沾水",
            desc: "这个问题大多数出现在轮测阶段，该现象并不会爆发性的出现",
          },
          {
            title: "接触不良未严密合缝",
            desc: "这个问题大多数出现在轮测阶段，该现象并不会爆发性的出现",
          },
        ],
        detailsList: [
          { title: "名称", desc: "阳极" },
          { title: "具体描述", desc: "隔膜阻抗有问题" },
          { title: "出现时间", desc: "2021-10-29" },
          { title: "editer", desc: "ls23467" },
          { title: "file_type", desc: ".pdf" },
          { title: "gns", desc: "gns://AEDBTRCBJYTVBJAAAAAABBBBcBB" },
          { title: "modified_time", desc: "2021-10-01 13:13:13" },
        ], //知识详情列表
        recomList: [
          { icon: pdf, name: "多轮测试的实验结果.pdf" },
          { icon: txt, name: "黑斑产生的原因原因.pdf" },
          { icon: pdf, name: "如何分辨不同的黑斑.txt" },
          { icon: txt, name: "黑斑会给后续测试结果带来什么影响.pdf" },
        ], // 案例推荐列表
      });
    }
  };
  render() {
    const { empty, list, recomList, detailsList } = this.state;
    return (
      <div className="knowledge">
        <div className="knowledge-top">
          <div className="search">
            <Input
              placeholder="请输入您的问题"
              className="input"
              ref={this.inputRef}
            />
            <Button
              type="primary"
              className="btn"
              onClick={() => {
                setTimeout(() => {
                  this.search();
                }, 500);
              }}
            >
              提问
            </Button>
          </div>
        </div>
        <div className="knowledge-content">
          {empty ? (
            <div className="img-box">
              <img src={nofont} alt=""></img>
              <p>请输入您的问题进行搜索</p>
            </div>
          ) : (
            <>
              <div className="search-left">
                <p className="count">
                  找到的<span style={{ color: "#F44336" }}>5</span>条结果
                </p>
                <div>
                  {list.map((item) => {
                    return (
                      <div className="list-item">
                        <p>{item.title}</p>
                        <p className="des">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="search-content">
                <D3Graph nodes={nodes} edges={edges} />
              </div>
              <div className="search-right">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="知识详情" key="1">
                    <div className="title">
                      <span></span>
                      <p> 请输入您的问题进行搜索</p>
                    </div>
                    {detailsList.map((item) => {
                      return (
                        <div className="detail-item">
                          <p className="item-title">{item.title}</p>
                          <p className="des">{item.desc}</p>
                        </div>
                      );
                    })}
                  </TabPane>
                  <TabPane tab="案例推荐" key="2">
                    {recomList.map((item) => {
                      return (
                        <div className="case-item">
                          <img src={item.icon} className="icon" alt="" />
                          {item.name}
                        </div>
                      );
                    })}
                  </TabPane>
                </Tabs>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default KnowledgePage;

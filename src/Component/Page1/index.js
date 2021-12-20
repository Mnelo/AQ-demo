import React, { Component } from "react";
import { Button, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Order from "../../Asset/Image/order.svg";
import Side from "../../Asset/Image/side.svg";
import fenxibaogao from "../../Asset/Image/fenxibaogao.svg";
import yujing from "../../Asset/Image/yujing.svg";
import zhuangbei from "../../Asset/Image/zhuangbei.svg";
import "./style.less";

class Page1 extends Component {
  render() {
    return (
      <div className="Page1">
        <div className="title">问题列表</div>

        <div className="table">
          <div className="table-h">
            <div className="table-left">
              <Button
                type="primary"
                onClick={() => {
                  this.props.setContent(2);
                }}
              >
                <PlusOutlined />
                新建
              </Button>
            </div>

            <div className="table-right">
              <div className="o">排序</div>

              <div className="s">
                <Select className="select" defaultValue="最新创建">
                  <option value="最近创建">最近创建</option>
                </Select>
              </div>

              <div className="i">
                <Input placeholder={"请输入"} />
              </div>

              <div className="im">
                <img className="logo-img" src={Order} alt="AnyDATA" />
                <img className="logo-img-2" src={Side} alt="AnyDATA" />
              </div>
            </div>
          </div>

          <div className="table-c">
            <div className="head head-color">
              <div className="l-1">问题类型</div>
              <div className="l-2">操作</div>
              <div className="l-3">类型代号</div>
              <div className="l-4">时间</div>
              <div className="l-5">负责人</div>
              <div className="l-6">所属产线</div>
              <div className="l-7">操作</div>
              <div></div>
            </div>

            <div className="head content-width">
              <div className="l-1 l-c">
                <div className="icon">
                  <img src={zhuangbei} alt="" />
                </div>
                <div className="word">
                  <div>设备断电</div>
                  <div>功率负载过大引起的断电，未造成设备损坏</div>
                </div>
              </div>
              <div className="l-2 l-c">...</div>
              <div className="l-3 l-c">E1005</div>
              <div className="l-4 l-c">2021-11-31 23:11</div>
              <div className="l-5 l-c l-5-s">
                <div>罗妮蔻</div>
                <div>手机装配线经理</div>
              </div>
              <div className="l-6 l-c">SJ-0-167523</div>
              <div
                className="l-7 l-7-c"
                onClick={() => {
                  this.props.setContent(9);
                }}
              >
                查看
              </div>
            </div>

            <div className="head content-width">
              <div className="l-1 l-c">
                <div className="icon">
                  <img src={fenxibaogao} alt="" />
                </div>
                <div className="word">
                  <div>电池性能</div>
                  <div>电池充电性能不佳，对电池续航能力评估</div>
                </div>
              </div>
              <div className="l-2 l-c">...</div>
              <div className="l-3 l-c">G1105</div>
              <div className="l-4 l-c">2021-11-21 16:12</div>
              <div className="l-5 l-c l-5-s">
                <div>米歇尔</div>
                <div>性能测试部经理</div>
              </div>
              <div className="l-6 l-c">XT-5-1008</div>
              <div
                className="l-7 l-7-c"
                onClick={() => {
                  this.props.setContent(9);
                }}
              >
                查看
              </div>
            </div>

            <div className="head content-width">
              <div className="l-1 l-c">
                <div className="icon">
                  <img src={yujing} alt="" />
                </div>
                <div className="word">
                  <div>过冷水异常</div>
                  <div>监测到过冷水即将超过临界值，本次过冷水涨</div>
                </div>
              </div>
              <div className="l-2 l-c">...</div>
              <div className="l-3 l-c">A0003</div>
              <div className="l-4 l-c">2021-10-31 10:12</div>
              <div className="l-5 l-c l-5-s">
                <div>姜鲍勃</div>
                <div>零部件设计经理</div>
              </div>
              <div className="l-6 l-c">bSJ-0-16023</div>
              <div
                className="l-7 l-7-c"
                onClick={() => {
                  this.props.setContent(9);
                }}
              >
                查看
              </div>
            </div>

            <div className="head content-width">
              <div className="l-1 l-c">
                <div className="icon">
                  <img src={zhuangbei} alt="" />
                </div>
                <div className="word">
                  <div>人为操作过失</div>
                  <div>人为操作导致齿轮卡顿无法正常运转</div>
                </div>
              </div>
              <div className="l-2 l-c">...</div>
              <div className="l-3 l-c">R0005</div>
              <div className="l-4 l-c">2021-10-30 12:12</div>
              <div className="l-5 l-c l-5-s">
                <div>梁艾丽</div>
                <div>工厂负责人</div>
              </div>
              <div className="l-6 l-c">GC-0-167523</div>
              <div
                className="l-7 l-7-c"
                onClick={() => {
                  this.props.setContent(9);
                }}
              >
                查看
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;

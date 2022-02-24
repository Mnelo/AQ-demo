import React, { Component } from "react";
import { Button, Table, Input, Modal, Form, Select } from "antd";
import axios from "axios";
import "./index.less";

const { Option } = Select;
export default class Factor extends Component {
  ref = React.createRef();
  state = {
    data: [],
    addModalVisible: false,
    checkModalVisible: false,
    reasonData: {
      des: "",
      result1: "",
      result2: "",
      result3: "",
    },
  };

  componentDidUpdate(preProps) {
    if (preProps.current !== this.props.current && this.props.current === 1) {
      this.getListData();
    }
  }

  /**
   * @description 获取列表数据
   */
  getListData = async () => {
    const { questionInfo } = this.props;

    const { data } = await axios.get(
      `http://localhost:8081/factorList?search=${questionInfo.question}`
    );

    const { list } = data;

    this.setState({
      data: list,
    });
  };

  //打开弹窗
  add = () => {
    this.setState({
      addModalVisible: true,
    });
  };

  //打开原因弹窗
  check = (reasonData) => {
    this.setState({
      checkModalVisible: true,
      reasonData,
    });
  };

  //改变状态
  change = (record) => {
    const { data } = this.state;
    let newData = [];
    const newstatus = record.status === "已匹配" ? "未匹配" : "已匹配";
    data.forEach((item) => {
      if (item.name === record.name) {
        newData = [
          ...newData,
          {
            name: item.name,
            type: "图匹配",
            status: newstatus,
            score: item.score,
          },
        ];
      } else {
        newData = [...newData, item];
      }
    });

    this.setState({
      data: newData,
    });
  };
  //链接到创建因子
  createFactor = () => {};

  columns = [
    {
      title: "因子名",
      dataIndex: "name",
      width: 600,
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "匹配类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "置信分",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "因子状态",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "操作项",
      render: (text, record) => {
        return (
          <div>
            <span
              onClick={() => {
                this.check(text.result);
              }}
              className="check-text"
            >
              查看原因
            </span>
            <span className="line">|</span>
            {record.status === "已匹配" ? (
              <span
                className="text"
                onClick={(e) => {
                  // e.stopPropagation()
                  this.change(record);
                }}
              >
                取消匹配
              </span>
            ) : (
              <span
                className="text"
                onClick={(e) => {
                  // e.stopPropagation()
                  this.change(record);
                }}
              >
                匹配
              </span>
            )}
          </div>
        );
      },
    },
  ];

  /**
   * 创建
   * @returns
   */
  onFinish = (values) => {
    const { data } = this.state;
    const score = parseInt(Math.random() * 100);
    const obj = [
      {
        name: "因子" + score,
        type: "图匹配",
        status: "未匹配",
        score: score,
      },
    ];
    const newData = obj.concat(data);

    this.setState(
      {
        addModalVisible: false,
        data: newData,
      },
      this.ref.current.resetFields()
    );
  };

  render() {
    const { data, addModalVisible, checkModalVisible, reasonData } = this.state;
    const { questionInfo } = this.props;
    return (
      <div className="factor">
        <div className="top">
          <p>您的问题描述为</p>
          <Input.TextArea
            className="textarea"
            value={questionInfo && questionInfo.des}
            disabled
          />
        </div>
        <div className="add-btn">
          <Button type="default" onClick={this.add}>
            手动添加因子
          </Button>
        </div>
        <div className="table-box">
          <Table
            columns={this.columns}
            dataSource={data}
            rowKey={(record) => record.name}
            pagination={{ pageSize: 5 }}
          />
        </div>
        <div className="footer-box">
          <Button
            type="default"
            onClick={() => {
              this.props.prev();
            }}
            className="pre"
          >
            上一步
          </Button>
          <Button
            type="primary"
            className="next"
            onClick={() => {
              this.props.next();
            }}
          >
            下一步
          </Button>
        </div>

        <Modal
          title="手动添加因子"
          wrapClassName="addModal"
          visible={addModalVisible}
          width="640px"
          footer={null}
          onCancel={() => {
            this.setState({
              addModalVisible: false,
            });
          }}
        >
          <Form
            name="basic"
            ref={this.ref}
            layout="vertical"
            onFinish={this.onFinish}
            initialValues={{
              position: "逻辑因子1",
            }}
          >
            <Form.Item
              label="语义片段"
              name="question"
              rules={[{ required: true, message: "输入不能为空" }]}
            >
              <Input
                className="input"
                autoComplete="off"
                placeholder="请输入问题描述中的语义片段"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                label="选择应匹配的逻辑因子"
                name="position"
                rules={[{ required: true, message: "选择不能为空" }]}
                style={{
                  display: "inline-block",
                  width: "51%",
                }}
              >
                <Select style={{ width: 342 }}>
                  <Option value="逻辑因子1">逻辑因子1</Option>
                  <Option value="逻辑因子2">逻辑因子2</Option>
                  <Option value="逻辑因子3">逻辑因子3</Option>
                </Select>
              </Form.Item>

              <span className="des">没有匹配的逻辑因子？</span>
              <span className="create" onClick={this.createFactor}>
                点击创建新因子
              </span>
            </Form.Item>
            <div className="antd-modal-footer">
              <Form.Item>
                <Button
                  className="cancel-btn"
                  onClick={() => {
                    this.setState({
                      addModalVisible: false,
                    });
                  }}
                >
                  取消
                </Button>
                <Button type="primary" htmlType="submit" className="create-btn">
                  创建
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
        <Modal
          title="现象描述"
          wrapClassName="infoModal"
          visible={checkModalVisible}
          destroyOnClose={true}
          onCancel={() => {
            this.setState({
              checkModalVisible: false,
            });
          }}
          footer={null}
        >
          <Form layout="vertical" initialValues={reasonData}>
            <Form.Item label="现象描述" name="des">
              <Input.TextArea disabled className="input-area" />
            </Form.Item>

            <Form.Item label="意图匹配结果" name="result1">
              <Input disabled></Input>
            </Form.Item>
            <Form.Item label="图匹配结果" name="result2">
              <Input disabled></Input>
            </Form.Item>
            <Form.Item label="参数匹配结果" name="result3">
              <Input disabled></Input>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

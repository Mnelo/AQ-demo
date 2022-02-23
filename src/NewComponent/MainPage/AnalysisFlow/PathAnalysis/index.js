/* eslint-disable react-hooks/exhaustive-deps */
/**
 * 路径分析
 * @author Jason.ji
 * @date 2022/02/18
 *
 */

import React, { memo, useState, useEffect } from "react";
import { Button, Select, Table, Drawer } from "antd";
import axios from "axios";
import { tableData as testData } from "./mock";
import CreateModal from "./CreateModal";
import CheckContent from "./CheckContent";
import "./style.less";

const { Option } = Select;

const PathAnalysis = (props) => {
  const { current, next, prev, setStep3Data, questionInfo } = props;
  const [tableData, setTableData] = useState([]);
  const [createVisible, setCreateVisible] = useState(false); // 新建弹窗
  const [checkVisible, setCheckVisible] = useState(false); // 去排查 界面
  const [checkInfo, setCheckInfo] = useState({}); // 排查数据

  useEffect(() => {
    if (current !== 2) return;

    getPathAnalysisList();
    setTableData(testData);
  }, [current]);

  /**
   * @description 获取路径分析list
   */
  const getPathAnalysisList = async () => {
    const { data } = await axios.get(
      `http://localhost:8081/analysisList?search=${questionInfo.question}`
    );

    console.log(data);
  };

  /**
   * 点击去排查
   * @param {MouseEvent} e
   * @param {Object} record 行数据
   */
  const toCheck = (e, record) => {
    setCheckInfo(record);
    setCheckVisible(true);
  };

  /**
   * 创建根因
   */
  const onCreate = (data) => {};

  // 点击下一步
  const onNext = () => {
    setStep3Data(tableData);
    next();
  };

  // 定义表格列
  const columns = [
    {
      title: <span className="table-th-title">{"问题现象"}</span>,
      dataIndex: "phenomenon",
      ellipsis: true,
      width: 300,
    },
    {
      title: <span className="table-th-title">{"问题根因"}</span>,
      dataIndex: "cause",
      ellipsis: true,
      width: 300,
    },
    {
      title: <span className="table-th-title">{"匹配类型"}</span>,
      dataIndex: "matchType",
      ellipsis: true,
      width: 250,
    },
    {
      title: <span className="table-th-title">{"置信分"}</span>,
      dataIndex: "score",
      ellipsis: true,
      width: 120,
    },
    {
      title: <span className="table-th-title">{"因子状态"}</span>,
      dataIndex: "status",
      ellipsis: true,
      width: 120,
      render: (status, record) => {
        return status ? "已采纳" : "未采纳";
      },
    },
    {
      title: <span className="table-th-title">{"操作项"}</span>,
      ellipsis: true,
      width: 120,
      render: (record) => (
        <span className="to-check-btn" onClick={(e) => toCheck(e, record)}>
          去排查
        </span>
      ),
    },
  ];

  return (
    <div className="path-analysis">
      <div className="tool-box">
        <div className="btn-box">
          <Button type="primary" onClick={(e) => setCreateVisible(true)}>
            新建根因
          </Button>
          <Button>逻辑树探索</Button>
        </div>

        <div className="input-box">
          <span className="select-desc">问题现象</span>
          <Select value={"all"}>
            <Option key={"all"} value={"all"}>
              全部
            </Option>
          </Select>

          <span className="select-desc">因子</span>
          <Select value={"all"}>
            <Option key={"all"} value={"all"}>
              全部
            </Option>
          </Select>
        </div>
      </div>

      <div className="table-box">
        <Table
          dataSource={tableData}
          columns={columns}
          className="path-analysis-table"
          rowKey={(record) => record.id}
          tableLayout="fixed"
          scroll={{ x: "100%" }}
        />
      </div>

      <div className="flow-footer">
        <Button onClick={(e) => prev()}>上一步</Button>
        <Button type="primary" onClick={onNext}>
          下一步
        </Button>
      </div>

      {/* 新建弹窗 */}
      <CreateModal
        visible={createVisible}
        setVisible={setCreateVisible}
        onCreate={onCreate}
      />

      {/* 去排查 抽屉 */}
      <Drawer
        className="to-check-drawer"
        visible={checkVisible}
        destroyOnClose
        closable={false}
        title={null}
        footer={null}
        mask={false}
        push={false}
        zIndex={520}
        height={"100vh"}
        placement="bottom"
        onClose={() => setCheckVisible(false)}
      >
        <CheckContent
          defaultInfo={checkInfo}
          visible={checkVisible}
          setVisible={setCheckVisible}
        />
      </Drawer>
    </div>
  );
};

PathAnalysis.defaultProps = {};

export default memo(PathAnalysis);

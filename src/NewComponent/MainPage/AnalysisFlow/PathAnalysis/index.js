/* eslint-disable react-hooks/exhaustive-deps */
/**
 * 路径分析
 * @author Jason.ji
 * @date 2022/02/18
 *
 */

import React, { memo, useState, useEffect, useRef } from "react";
import { Button, Select, Table, Drawer } from "antd";
import axios from "axios";
import CreateModal from "./CreateModal";
import CheckContent from "./CheckContent";
import "./style.less";

const { Option } = Select;

const PathAnalysis = (props) => {
  const { current, next, prev, questionInfo } = props;
  const preQ = useRef(''); // 标记问题
  const [tableData, setTableData] = useState([]);
  const [createVisible, setCreateVisible] = useState(false); // 新建弹窗
  const [checkVisible, setCheckVisible] = useState(false); // 去排查 界面
  const [checkInfo, setCheckInfo] = useState({}); // 排查数据

  useEffect(() => {
    if (!current || preQ.current === questionInfo.question) return;

    preQ.current = questionInfo.question;
    getPathAnalysisList();
  }, [current, questionInfo]);

  /**
   * @description 获取路径分析list
   */
  const getPathAnalysisList = async () => {
    const { data } = await axios.get(
      `http://localhost:8081/analysisList?search=${questionInfo.question}`
    );

    setTableData(data.list || []);
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
  const onCreate = (data) => {
    setTableData(pre => [
      {
        ...data,
        "score": 100,
        "status": "未采纳",
        "path": "人工添加",
        "file": [
          "锂离子电池隔膜黑斑造成低压原因分析.pdf",
          "化成容量损失失效分析报告20190312.ppt",
          "PP330型号电池故障分析记录.docx"
        ],
        "checkList": [
          {
            "name": "容量损失",
            "status": "已匹配",
            "method": "充放电测试仪进行容量测定"
          },
          {
            "name": "负极侧隔膜出现黑斑",
            "status": "已匹配",
            "method": "电镜扫描能谱分析"
          },
          {
            "name": "碳负极脱粉粘结到隔膜表面",
            "status": "已匹配",
            "method": "显微观察"
          },
          {
            "name": "电池局部高温",
            "status": "已匹配",
            "method": "温度记录仪配热电阻测温度"
          },
          {
            "name": "电池极化放电",
            "status": "未匹配",
            "method": "电镜扫描能谱分析"
          },
          {
            "name": "电池卷心内存在有活性物质附粉",
            "status": "未匹配",
            "method": "材料成分分析"
          }
        ]
      },
      ...pre
    ]);
    setCreateVisible(false);
  };

  // 更新排查结果
  const onUpdate = data => {
    const { index, checkList } = data;
    const newTable = JSON.parse(JSON.stringify(tableData));
    newTable[index].checkList = checkList;
    newTable[index].status = checkList.length && checkList.every(item => item.status === '已匹配') ? '已采纳' : '未采纳';
    setTableData(newTable);
  };

  // 点击下一步
  const onNext = () => {
    next();
  };

  // 定义表格列
  const columns = [
    {
      title: <span className="table-th-title">{"问题现象"}</span>,
      dataIndex: "phenomenon",
      ellipsis: true,
      width: 280,
    },
    {
      title: <span className="table-th-title">{"问题根因"}</span>,
      dataIndex: "cause",
      ellipsis: true,
      width: 280,
    },
    {
      title: <span className="table-th-title">{"归因路径"}</span>,
      dataIndex: "path",
      ellipsis: true,
      width: 230,
    },
    {
      title: <span className="table-th-title">{"置信分"}</span>,
      dataIndex: "score",
      ellipsis: true,
      width: 100,
    },
    {
      title: <span className="table-th-title">{"因子状态"}</span>,
      dataIndex: "status",
      ellipsis: true,
      width: 100
    },
    {
      title: <span className="table-th-title">{"操作项"}</span>,
      ellipsis: true,
      width: 100,
      render: (_, record, index) => (
        <span className="to-check-btn" onClick={(e) => toCheck(e, {...record, index})}>
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
          rowKey={(record) => record.cause}
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
        tableData={tableData}
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
          onUpdate={onUpdate}
        />
      </Drawer>
    </div>
  );
};

PathAnalysis.defaultProps = {};

export default memo(PathAnalysis);

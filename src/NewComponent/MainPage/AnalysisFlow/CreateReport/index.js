/* eslint-disable react-hooks/exhaustive-deps */
/**
 * 生成报告
 * @author Jason.ji
 * @date 2022/02/18
 *
 */

import React, { memo, useEffect, useState, useRef } from "react";
import { Input, Button } from "antd";
import axios from "axios";
import file from "./report.docx";
import "./style.less";

const { TextArea } = Input;

const CreateReport = (props) => {
  const { current, prev, questionInfo, reAnalysis } = props;
  const preQ = useRef(''); // 标记问题
  const [reportData, setReportData] = useState({});

  useEffect(() => {
    if (!current || preQ.current === questionInfo.question) return;

    preQ.current = questionInfo.question;

    getReportData();
  }, [current]);

  const getReportData = async () => {
    const { data } = await axios.get(
      `http://localhost:8081/report?search=${questionInfo.question}`
    );

    setReportData(data.data || {});
  };

  // 下载
  const download = () => {
    const a = document.createElement("a");
    a.style = "display: none";
    a.download = "归因分析报告";
    a.href = file;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="create-case-report">
      <h1 className="report-title">归因报告</h1>

      <div className="form-content">
        <div className="row equally">
          <div className="row-item">
            <h2 className="row-h2">问题主体</h2>
            <Input value={questionInfo.question} />
          </div>

          <div className="row-item">
            <h2 className="row-h2">问题发生位置</h2>
            <Input value={questionInfo.position} />
          </div>
        </div>

        <div className="row">
          <div className="row-item">
            <h2 className="row-h2">现象描述</h2>
            <TextArea autoSize value={questionInfo.des} />
          </div>
        </div>

        <div className="row">
          <div className="row-item">
            <h2 className="row-h2">问题排查过程</h2>
            <TextArea autoSize value={reportData.process} />
          </div>
        </div>

        {(reportData.reason || []).map((item, index) => {
          return (
            <div className="row equally" key={index}>
              <div className="row-item">
                <h2 className="row-h2">{`问题根因${index + 1}`}</h2>
                <Input value={item.des} />
              </div>

              <div className="row-item">
                <h2 className="row-h2">建议改善措施</h2>
                <Input value={item.method} />
              </div>
            </div>
          );
        })}
      </div>

      {/* 底部按钮 */}
      <div className="flow-footer">
        <Button onClick={(e) => prev()}>上一步</Button>
        <Button type="primary" onClick={(e) => download()}>
          下载报告
        </Button>
        <Button onClick={(e) => reAnalysis()}>再次分析</Button>
      </div>
    </div>
  );
};

CreateReport.defaultProps = {};

export default memo(CreateReport);

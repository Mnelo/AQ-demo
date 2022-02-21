/**
 * 排查 页面
 * @author Jason.ji
 * @date 2022/02/21
 *
*/

import React, { memo, useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import { switchIcon } from '../SwitchIcon';
import { pathTable } from '../mock'
import UpdateModal from './UpdateModal';
import './style.less';

const testExp = [
  '多轮测试的实验结果.pdf',
  '黑斑产生的原因原因.pdf',
  '如何分辨不同的黑斑.txt',
  '黑斑会给后续测试结果带来什么影响.pdf'
]

const CheckContent = props => {
  const { visible, setVisible, defaultInfo } = props;
  const [updateVisible, setUpdateVisible] = useState(false); // 更新结果弹窗
  const [updateInfo, setUpdateInfo] = useState({}); // 更新的行数据

  useEffect(() => {
    document.body.classList.add('hide-scroll');

    return () => document.body.classList.remove('hide-scroll');
  }, [])

  // 更新排查结果
  const onUpdate = (e, record) => {
    setUpdateInfo(record);
    setUpdateVisible(true);
  }

  // 排除因子
  const onExclude = data => {
    setUpdateInfo(false);
  }

  // 确认因子
  const onOk = data => {
    setUpdateInfo(false);
  }

  // 定义表格列
  const columns = [
    {
      title: <span className="table-th-title">{'因子名'}</span>,
      dataIndex: 'causeName',
      ellipsis: true,
      width: 350
    },
    {
      title: <span className="table-th-title">{'因子状态'}</span>,
      dataIndex: 'causeStatus',
      ellipsis: true,
      width: 150,
      render: (status, record) => {
        return status ? '已确认' : '未确认'
      }
    },
    {
      title: <span className="table-th-title">{'检测方法'}</span>,
      dataIndex: 'method',
      ellipsis: true,
      width: 150
    },
    {
      title: <span className="table-th-title">{'操作项'}</span>,
      ellipsis: true,
      width: 250,
      render: record => (
        <span className="to-check-btn" onClick={e => onUpdate(e, record)}>更新排查结果</span>
      )
    }
  ];

  return (
    <div className="path-check-drawer-content">
      <div className="header">
        <Button onClick={e => setVisible(false)}>返回</Button>
      </div>

      <div className="main">
        <div className="path-info">
          <h1>路径信息</h1>

          <div className="detail">
            <p className="p-item">
              <span className="label-name">问题现象</span>：
              <span>{defaultInfo.phenomenon}</span>
            </p>

            <p className="p-item">
              <span className="label-name">问题根因</span>：
              <span>{defaultInfo.cause}</span>
            </p>

            <p className="p-item">
              <span className="label-name">归因路径</span>：
              <span>2022-02-12 10:10:10</span>
            </p>

            <p className="p-item">
              <span className="label-name">置信分</span>：
              <span>{defaultInfo.score}</span>
            </p>
          </div>

          <div className="table-box">
            <Table
              dataSource={pathTable}
              columns={columns}
              className="path-analysis-table"
              rowKey={record => record.id}
              tableLayout="fixed"
              scroll={{ x: '100%' }}
            />
          </div>
        </div>
        <div className="relation-exp">
          <h2>相关案例</h2>

          <div className="exp-list">
            <ul>
              {testExp.map((item, index) => {
                return (
                  <li className="exp-item" key={index}>
                    <span className="icon">{switchIcon('file', item)}</span>
                    <span className="file-name">{item}</span>
                  </li>
                )
              })}

            </ul>
          </div>
        </div>
      </div>

      {/* 更新排查结果弹窗 */}
      <UpdateModal
        defaultInfo={updateInfo}
        visible={updateVisible}
        setVisible={setUpdateVisible}
        onExclude={onExclude}
        onOk={onOk}
      />
    </div>
  );
};

CheckContent.defaultProps = {

};

export default memo(CheckContent);

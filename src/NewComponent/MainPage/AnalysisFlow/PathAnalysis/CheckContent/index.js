/**
 * 排查 页面
 * @author Jason.ji
 * @date 2022/02/21
 *
*/

import React, { memo, useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import { switchIcon } from '../SwitchIcon';
import UpdateModal from './UpdateModal';
import './style.less';

const CheckContent = props => {
  const { setVisible, defaultInfo } = props;
  const [showData, setShowData] = useState({});
  const [updateVisible, setUpdateVisible] = useState(false); // 更新结果弹窗
  const [updateInfo, setUpdateInfo] = useState({}); // 更新的行数据

  useEffect(() => {
    document.body.classList.add('hide-scroll');

    return () => document.body.classList.remove('hide-scroll');
  }, [])

  useEffect(() => {
    setShowData({ ...defaultInfo });
  }, [defaultInfo])

  // 点击更新排查结果
  const onUpdate = (e, record) => {
    setUpdateInfo(record);
    setUpdateVisible(true);
  }

  // 排除因子
  const onExclude = data => {
    const newData = { ...showData };

    newData.checkList = newData.checkList.map(item => {
      if (item.name === data.name) {
        return { ...data, status: '已排除' };
      }

      return item;
    });

    setShowData(newData);
    setUpdateInfo({});
    setUpdateVisible(false);
  }

  // 确认因子
  const onOk = data => {
    const newData = { ...showData };

    newData.checkList = newData.checkList.map(item => {
      if (item.name === data.name) {
        return { ...data, status: '已匹配' };
      }

      return item;
    });

    setShowData(newData);
    setUpdateInfo({});
    setUpdateVisible(false);
  }

  // 定义表格列
  const columns = [
    {
      title: <span className="table-th-title">{'因子名'}</span>,
      dataIndex: 'name',
      ellipsis: true,
      width: 350
    },
    {
      title: <span className="table-th-title">{'因子状态'}</span>,
      dataIndex: 'status',
      ellipsis: true,
      width: 150
    },
    {
      title: <span className="table-th-title">{'检测方法'}</span>,
      dataIndex: 'method',
      ellipsis: true,
      width: 250
    },
    {
      title: <span className="table-th-title">{'操作项'}</span>,
      ellipsis: true,
      width: 150,
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

      <div className="column-wrap">
        <div className="main">
          <div className="path-info">
            <h1>路径信息</h1>

            <div className="detail">
              <p className="p-item">
                <span className="label-name">问题现象</span>：
                <span>{showData.phenomenon}</span>
              </p>

              <p className="p-item">
                <span className="label-name">问题根因</span>：
                <span>{showData.cause}</span>
              </p>

              <p className="p-item">
                <span className="label-name">归因路径</span>：
                <span>{showData.path}</span>
              </p>

              <p className="p-item">
                <span className="label-name">置信分</span>：
                <span>{showData.score}</span>
              </p>
            </div>

            <div className="table-box">
              <Table
                dataSource={showData.checkList || []}
                columns={columns}
                className="path-analysis-table"
                rowKey={record => record.name}
                tableLayout="fixed"
                scroll={{ x: '100%' }}
              />
            </div>
          </div>
          <div className="relation-exp">
            <h2>相关案例</h2>

            <div className="exp-list">
              <ul>
                {(showData.file || []).map((item, index) => {
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

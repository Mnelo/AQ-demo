/**
 * 路径分析
 * @author Jason.ji
 * @date 2022/02/18
 *
*/

import React, { memo, useState, useEffect } from 'react';
import { Button, Select, Table } from 'antd';
import { tableData as testData } from './mock';
import './style.less';

const { Option } = Select;

const PathAnalysis = props => {
  const { current, next, prev } = props;
  const [tableData, setTableData] = useState([]);
 
  useEffect(() => {
    if (current !== 2) return;

    setTableData(testData);
  }, [current]);

  /**
   * 点击去排查
   * @param {MouseEvent} e 
   * @param {Object} record 行数据
   */
  const toCheck = (e, record) => {
    console.log(record)
  }

  // 定义表格列
  const columns = [
    {
      title: <span className="table-th-title">{'问题现象'}</span>,
      dataIndex: 'phenomenon',
      ellipsis: true,
      width: 300
    },
    {
      title: <span className="table-th-title">{'问题根因'}</span>,
      dataIndex: 'cause',
      ellipsis: true,
      width: 300
    },
    {
      title: <span className="table-th-title">{'匹配类型'}</span>,
      dataIndex: 'matchType',
      ellipsis: true,
      width: 250
    },
    {
      title: <span className="table-th-title">{'置信分'}</span>,
      dataIndex: 'score',
      ellipsis: true,
      width: 120
    },
    {
      title: <span className="table-th-title">{'因子状态'}</span>,
      dataIndex: 'status',
      ellipsis: true,
      width: 120,
      render: (status, record) => {
        return status ? '已采纳' : '未采纳'
      }
    },
    {
      title: <span className="table-th-title">{'操作项'}</span>,
      ellipsis: true,
      width: 120,
      render: record => (
        <span className="to-check-btn" onClick={e => toCheck(e, record)}>去排查</span>
      )
    }
  ];

  return (
    <div className="path-analysis">
      <div className="tool-box">
        <div className="btn-box">
          <Button type="primary">新建根因</Button>
          <Button>逻辑树探索</Button>
        </div>
        
        <div className="input-box">
          <span className="select-desc">问题现象</span>
          <Select value={'all'}>
            <Option key={'all'} value={'all'}>全部</Option>
          </Select>

          <span className="select-desc">因子</span>
          <Select value={'all'}>
            <Option key={'all'} value={'all'}>全部</Option>
          </Select>
        </div>
      </div>

      <div className="table-box">
      <Table
          dataSource={tableData}
          columns={columns}
          className="path-analysis-table"
          rowKey={record => record.id}
          tableLayout="fixed"
          scroll={{ x: '100%' }}
        />
      </div>

      <div className="flow-footer">
        <Button onClick={e => prev()}>上一步</Button>
        <Button type="primary" onClick={e => next()}>下一步</Button>
      </div>
    </div>
  );
};

PathAnalysis.defaultProps = {

};

export default memo(PathAnalysis);

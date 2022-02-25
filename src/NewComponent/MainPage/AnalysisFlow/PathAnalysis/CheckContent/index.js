/**
 * 排查 页面
 * @author Jason.ji
 * @date 2022/02/21
 *
*/

import React, { memo, useState, useEffect } from 'react';
import { Button, Timeline } from 'antd';
import { switchIcon } from '../SwitchIcon';
import UpdateModal from './UpdateModal';
import './style.less';

const { Item: TimeItem } = Timeline;
const pickColor = status => {
  switch (status) {
    case '未匹配': return { cn: 'unmatch', color: '#bfbfbf' };
    case '已匹配': return { cn: 'match', color: '#52C41A' };
    case '已排除': return { cn: 'exclude', color: '#F5222D' };
    default: return { cn: 'unmatch', color: '#bfbfbf' };
  }
}

const CheckContent = props => {
  const { setVisible, defaultInfo } = props;
  const [showData, setShowData] = useState({});
  const [updateVisible, setUpdateVisible] = useState(false); // 更新结果弹窗
  const [updateInfo, setUpdateInfo] = useState({}); // 更新的行数据

  useEffect(() => {
    document.body.classList.add('hide-scroll');

    window.addEventListener('scroll', e => {
      console.log(e)
    })

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
              <div className="col">
                <p className="p-item">
                  <span className="label-name">问题现象</span>：
                  <span className="info">{showData.phenomenon}</span>
                </p>

                <p className="p-item">
                  <span className="label-name">归因路径</span>：
                  <span className="info">{showData.path}</span>
                </p>
              </div>

              <div className="col">
                <p className="p-item">
                  <span className="label-name">问题根因</span>：
                  <span className="info">{showData.cause}</span>
                </p>

                <p className="p-item">
                  <span className="label-name">置信分</span>：
                  <span className="info">{showData.score}</span>
                </p>
              </div>
            </div>

            <div className="table-box">
              <h1>路径分析</h1>

              <div className="time-tree">
                <Timeline mode="alternate">
                  {(showData.checkList || []).map((data, index) => {
                    const { name, status, method } = data;
                    const { cn, color } = pickColor(status);

                    return (
                      <TimeItem
                        key={index}
                        className={`time-tree-item ${cn}`}
                        dot={<span className='circle' style={{ backgroundColor: status === '已匹配' ? '#126ee3' : '#bfbfbf' }} />}
                      >
                        <div className="time-item">
                          <p className="row">
                            <span className="name-l">因子名称：</span>
                            <span className="word-l">{name}</span>
                          </p>

                          <p className="row">
                            <span className="name-m">因子状态：</span>
                            <span className='circle' style={{ backgroundColor: color }} />
                            <span className="word-m">{status}</span>
                          </p>

                          <p className="row">
                            <span className="name-m">检测方法：</span>
                            <span className="word-m">{method}</span>
                          </p>

                          <p className="row"><span className="to-check-btn" onClick={e => onUpdate(e, data)}>更新</span></p>
                        </div>
                      </TimeItem>
                    )
                  })}
                </Timeline>
              </div>
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

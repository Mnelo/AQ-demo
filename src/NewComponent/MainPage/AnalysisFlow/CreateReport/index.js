/**
 * 生成报告
 * @author Jason.ji
 * @date 2022/02/18
 *
*/

import React, { memo, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import './style.less';

const { TextArea } = Input;

const CreateReport = props => {
  const { prev } = props;

  return (
    <div className="create-case-report">
      <h1 className="report-title">归因报告</h1>

      <div className="form-content">
        <div className="row equally">
          <div className="row-item">
            <h2 className="row-h2">问题主体</h2>
            <Input />
          </div>

          <div className="row-item">
            <h2 className="row-h2">问题发生位置</h2>
            <Input />
          </div>
        </div>

        <div className="row">
          <div className="row-item">
            <h2 className="row-h2">现象描述</h2>
            <TextArea />
          </div>
        </div>

        <div className="row">
          <div className="row-item">
            <h2 className="row-h2">问题排查过程</h2>
            <TextArea />
          </div>
        </div>

        <div className="row equally">
          <div className="row-item">
            <h2 className="row-h2">问题根因1</h2>
            <Input />
          </div>

          <div className="row-item">
            <h2 className="row-h2">建议改善措施</h2>
            <Input />
          </div>
        </div>

        <div className="row equally">
          <div className="row-item">
            <h2 className="row-h2">问题根因2</h2>
            <Input />
          </div>

          <div className="row-item">
            <h2 className="row-h2">建议改善措施</h2>
            <Input />
          </div>
        </div>

        <div className="row equally">
          <div className="row-item">
            <h2 className="row-h2">问题根因3</h2>
            <Input />
          </div>

          <div className="row-item">
            <h2 className="row-h2">建议改善措施</h2>
            <Input />
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="flow-footer">
        <Button onClick={e => prev()}>上一步</Button>
        <Button type="primary">下载报告</Button>
        <Button >再次分析</Button>
      </div>
    </div>
  );
};

CreateReport.defaultProps = {

};

export default memo(CreateReport);

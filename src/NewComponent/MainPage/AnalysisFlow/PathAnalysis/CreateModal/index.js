/**
 * 组件描述
 * @author Jason.ji
 * @date 2022/02/21
 *
*/

import React, { memo, useState } from 'react';
import { Modal, Input, Select, Button } from 'antd';
import './style.less';

const { TextArea } = Input;
const { Option } = Select;
const testCause = ['问题现象1', '问题现象2', '问题现象3'];

const CreateModal = props => {
  const { visible, setVisible, onCreate } = props;
  const [causeData, setCauseData] = useState({}); // 新建根因

  return (
    <Modal
      className="add-path-ana-modal"
      visible={visible}
      focusTriggerAfterClose={false}
      destroyOnClose={true}
      width={640}
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <div className="content">
      <h2>人工新建根因</h2>

      <div className="form-content">
        <div className="form-item">
          <p className="item-name required">请选择问题现象：</p>
          <Select
            className="cause-select"
            defaultValue={testCause[0]}
            onChange={value => setCauseData(pre => ({...causeData, phenomenon: value}))}
          >
            {testCause.map(item => (
              <Option key={item} value={item}>{item}</Option>
            ))}
          </Select>
        </div>

        <div className="form-item">
          <p className="item-name required">请输入新的问题根因：</p>
          <TextArea
            placeholder="请输入"
            autoSize={{ minRows: 4, maxRows: 4 }}
            value={causeData.cause}
            onChange={e => setCauseData(pre => ({...causeData, cause: e.target.value}))}
          />
        </div>
      </div>

      <div className="footer">
          <Button onClick={e => setVisible(false)}>
            取消
          </Button>
          <Button type="primary" onClick={e => onCreate(causeData)}>
            创建
          </Button>
      </div>
    </div>
    </Modal>
  );
};

CreateModal.defaultProps = {

};

export default memo(CreateModal);

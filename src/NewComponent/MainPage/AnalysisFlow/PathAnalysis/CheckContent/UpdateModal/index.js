/**
 * 组件描述
 * @author Jason.ji
 * @date 2022/02/21
 *
*/

import React, { memo, useState, useEffect } from 'react';
import { Modal, Input, Button } from 'antd';
import './style.less';

const { TextArea } = Input;

const UpdateModal = props => {
  const { visible, setVisible, defaultInfo, onOk, onExclude } = props;
  const [explain, setExplain] = useState(''); // 排查结果说明

  useEffect(() => {
    if (!defaultInfo.explain) return;

    setExplain(defaultInfo.explain);
  }, [defaultInfo]);

  const onExpChange = e => {
    setExplain(e.target.value);
  }

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
        <h2>更新排查结果</h2>

        <div className="form-content">
          <div className="form-item">
            <p className="item-name">您选择的因子为：</p>
            <Input disabled value={defaultInfo.name} />
          </div>

          <div className="form-item">
            <p className="item-name">因子检测方法为：</p>
            <Input disabled value={defaultInfo.method} />
          </div>

          <div className="form-item">
            <p className="item-name">请输入新的排查结果：</p>
            <TextArea
              placeholder="请输入"
              autoSize={{ minRows: 4, maxRows: 4 }}
              value={explain}
              onChange={onExpChange}
            />
          </div>
        </div>

        <div className="footer">
            <Button onClick={e => onExclude({ ...defaultInfo, explain })}>
              排除
            </Button>
            <Button type="primary" onClick={e => onOk({ ...defaultInfo, explain })}>
              确定
            </Button>
        </div>
      </div>
    </Modal>
  );
};

UpdateModal.defaultProps = {

};

export default memo(UpdateModal);

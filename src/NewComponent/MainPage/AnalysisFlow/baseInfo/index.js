import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import './index.less'
export default class BaseInfo extends Component {

  //提交
  onFinish = (data) =>{
    this.props.saveProblem(data);
    // this.props.next();
  }

  render() {
    return (
      <div>
        <div className='form-box'>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          autoComplete="off"
          >
          <Form.Item
            label="问题主体"
            name="question"
            rules={[{ required: true, message: '输入不能为空' }]}
          >
            <Input className='input' placeholder='请输入出现问题的产品、设备等主体名称'/>
          </Form.Item>

          <Form.Item
            label="问题发生位置"
            name="position"
            rules={[{ required: true, message: '输入不能为空' }]}
          >
            <Input className='input' placeholder='请输入出现问题的工序、步骤等环节信息'/>
          </Form.Item>
          <Form.Item
            label="问题现象描述"
            name="des"
            rules={[{ required: true, message: '输入不能为空' }]}
          >
            <Input.TextArea
             className='textarea'
             placeholder='请用简洁的语言描述出现的问题现象，如问题现象、环境信息、关键指标信息、产品外观描述等'
             autoSize={{ minRows: 5, maxRows: 10 }}
            />
          </Form.Item>
          <div className='btn-box'>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className='submit-btn'>
                问题提交
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
    )
  }
}

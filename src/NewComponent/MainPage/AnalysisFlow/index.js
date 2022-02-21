
/**
 * 归因分析流程
 * @author Jason.ji
 * @date 2022/02/18
 *
*/

import React, { Component } from 'react';
import { Steps, Button } from 'antd';
import PathAnalysis from './PathAnalysis';
import CreateReport from './CreateReport';
import Question from './baseInfo/index';
import Factor from './factor/index';
import './style.less';

const { Step } = Steps;

class AnalysisFlow extends Component {
  state = {
    current: 0, // 步骤标记
    questionInfo:{}, // 问题描述
  };

  /**
   * 上一步
   */
  prev = () => {
    const { current } = this.state;

    if (!current) return;

    this.setState({ current: current - 1 });
  }

  /**
   * 下一步
   * @returns 
   */
  next = () => {
    const { current } = this.state;

    if (current === 3) return;

    this.setState({ current: current + 1 });
  }

  /**
   * 保存问题描述
   */
  saveProblem = (obj) =>{
    this.setState({
      questionInfo: obj
    },
    this.next()
    )
  }
  render() {
    const { current, questionInfo } = this.state;

    return (
      <div className="analysis-flow">
        <div className="top-steps">
          <Steps current={current}>
            <Step title='问题描述' />
            <Step title='因子匹配' />
            <Step title='路径分析' />
            <Step title='生成报告' />
          </Steps>
        </div>

        <div className="main-content" >
          <div className={`step-wrapper ${current === 0 ? 'show' : 'hide'}`}>
            <Question
              current={current}
              next={this.next}
              prev={this.prev}
              saveProblem={this.saveProblem}
            />
          </div>

          <div className={`step-wrapper ${current === 1 ? 'show' : 'hide'}`}>
            <Factor
              current={current}
              next={this.next}
              prev={this.prev}
              questionInfo={questionInfo}
            />
          </div>

          {/* 路径分析 */}
          <div className={`step-wrapper ${current === 2 ? 'show' : 'hide'}`}>
            <PathAnalysis
              current={current}
              next={this.next}
              prev={this.prev}
            />
          </div>
            
          {/* 生成报告 */}
          <div className={`step-wrapper ${current === 3 ? 'show' : 'hide'}`}>
            <CreateReport
              current={current}
              next={this.next}
              prev={this.prev}
            />
          </div>
        </div>
      </div>
    );
  };
}

AnalysisFlow.defaultProps = {

};

export default AnalysisFlow;

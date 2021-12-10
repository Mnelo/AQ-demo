import React, { Component } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import Logo from "../../Asset/Image/head-Logo.svg";
import headImage from "../../Asset/Image/head-image.svg";
import "./style.less";

class Head extends Component {
  render() {
    return (
      <div className="head-box">
        <div className="head-left">
          <div
            className="img"
            onClick={() => {
              this.props.setType(0);
            }}
          >
            <img className="logo-img" src={Logo} alt="AnyDATA" />
          </div>

          <div className="icon">
            <MenuFoldOutlined className="c-icon" />
          </div>
        </div>

        <div className="head-right">
          <div className="icon">
            <img className="head-img" src={headImage} alt="AnyDATA" />
          </div>
          <div className="word">John Lee</div>
        </div>
      </div>
    );
  }
}

export default Head;

import React, { Component } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import Logo from "../../Asset/Image/head-Logo.svg";
import "./style.css";

class Head extends Component {
  render() {
    return (
      <div className="head-box">
        <div className="head-left">
          <img className="logo-img" src={Logo} alt="AnyDATA" />
          <MenuFoldOutlined className="c-icon" />
        </div>
      </div>
    );
  }
}

export default Head;

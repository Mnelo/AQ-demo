import React, { Component } from "react";
import Logo from "../../Asset/Image/AD.svg";
import "./style.less";

class Head extends Component {
  render() {
    return (
      <div className="head-box">
        <div className="head-left">
          <div className="img">
            <img className="logo-img" src={Logo} alt="AnyDATA" />
          </div>
        </div>
      </div>
    );
  }
}

export default Head;

import React, { Component } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SideBarIconFont from "../IconFont";
import "./style.less";

const { Item, ItemGroup } = Menu;
class SideBar extends Component {
  state = {
    current: "1",
  };

  handleClick = (e) => {
    if (e.key === "1") {
      this.props.setContent(6);
    }

    if (e.key === "2") {
      this.props.setContent(3);
    }

    if (e.key === "3") {
      this.props.setContent(1);
    }

    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="side-bar collapsed-open">
        <div className="side-memu-wrapper">
          <Menu
            theme="Light"
            onClick={this.handleClick}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[this.state.current]}
            mode="inline"
          >
            <ItemGroup key="sub1" title="首页">
              <Item
                key="1"
                icon={<SideBarIconFont type="icon-sousuo-xianxing" />}
              >
                知识问答
                {/* <Link to="/index">
                            <IconFont className="icon-none-sider-bar" type="icon-Menu_Search" />
                                知识问答
                            </Link> */}
              </Item>
              <Item key="2" icon={<MailOutlined />}>
                归因分析
                {/* <Link to="/index">
                            <IconFont className="icon-none-sider-bar" type="icon-Menu_Search" />
                                归因分析
                            </Link> */}
              </Item>
              <Item key="3" icon={<MailOutlined />}>
                FA编辑器
              </Item>
              <Item key="4" icon={<SettingOutlined />}>
                数据管理
              </Item>
              <Item key="5" icon={<MailOutlined />}>
                账号管理
              </Item>
              <Item key="6" icon={<AppstoreOutlined />}>
                系统配置
              </Item>
            </ItemGroup>
          </Menu>
        </div>
      </div>
    );
  }
}
export default SideBar;

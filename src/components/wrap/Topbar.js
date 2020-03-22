import React from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
const { Header } = Layout;

const submenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Billing
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Settings
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

export default () => (
  <Header className="header" style={{ background: "#fff" }}>
    <div className="logo" style={{ float: "left" }}>
      LOGO
    </div>

    <Dropdown overlay={submenu} placement="bottomCenter">
      <a
        className="ant-dropdown-link"
        onClick={e => e.preventDefault()}
        style={{ float: "right" }}
      >
        <UserOutlined /> John
      </a>
    </Dropdown>
  </Header>
);

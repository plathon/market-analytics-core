import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

const subMenu = (
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
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px", float: "right" }}
    >
      <Menu.Item key="1">
        <Dropdown overlay={subMenu} placement="bottomCenter">
          <a target="_blank" rel="noopener noreferrer" href="/#">
            <UserOutlined /> John
          </a>
        </Dropdown>
      </Menu.Item>
    </Menu>
  </Header>
);

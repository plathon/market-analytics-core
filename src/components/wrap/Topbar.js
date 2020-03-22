import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

const submenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/#">
        Billing
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/#">
        Settings
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/#">
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
        href="/#"
      >
        <UserOutlined /> John
      </a>
    </Dropdown>
  </Header>
);

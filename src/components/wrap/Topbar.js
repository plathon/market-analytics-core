import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import FirebaseContext from "../../context/FirebaseContext";
const { Header } = Layout;

const menuItems = [
  {
    name: "Profile",
    to: "/profile"
  },
  {
    name: "Billing",
    to: "/billing"
  },
  {
    name: "Settings",
    to: "/settings"
  },
  {
    name: "Logout",
    to: "/logout"
  }
];

const menu = (
  <Menu>
    {menuItems.map((menuItem, i) => (
      <Menu.Item key={i}>
        <Link to={menuItem.to}>{menuItem.name}</Link>
      </Menu.Item>
    ))}
    {/*<Menu.Divider />*/}
  </Menu>
);

export default () => {
  const firebase = useContext(FirebaseContext);

  return (
    <Header className="header" style={{ background: "#fff" }}>
      <div className="logo" style={{ float: "left" }}>
        LOGO
      </div>

      <Dropdown overlay={menu} placement="bottomCenter">
        <a
          className="ant-dropdown-link"
          onClick={e => e.preventDefault()}
          style={{ float: "right" }}
          href="/#"
        >
          <UserOutlined />
        </a>
      </Dropdown>
    </Header>
  );
};

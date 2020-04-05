import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

import { Popover, Position, Menu as MenuEG, IconButton } from "evergreen-ui";

const { Header } = Layout;

export default () => (
  <Header className="header" style={{ background: "#fff" }}>
    <div className="logo" style={{ float: "left" }}>
      LOGO
    </div>

    <Popover
      position={Position.BOTTOM_LEFT}
      content={
        <MenuEG>
          <MenuEG.Group title="Actions">
            <Link to="/profile">
              <MenuEG.Item icon="people">Profile</MenuEG.Item>
            </Link>
            <MenuEG.Item icon="circle-arrow-right">Move...</MenuEG.Item>
            <MenuEG.Item icon="edit" secondaryText="⌘R">
              Rename...
            </MenuEG.Item>
          </MenuEG.Group>
          <MenuEG.Divider />
          <MenuEG.Group title="destructive">
            <MenuEG.Item icon="trash" intent="danger">
              Delete...
            </MenuEG.Item>
          </MenuEG.Group>
        </MenuEG>
      }
    >
      <IconButton marginRight={16} float="right" marginTop={15} icon="cog" />
    </Popover>
  </Header>
);

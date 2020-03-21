import React from "react";

import { Row, Col } from "antd";

import SignupFor from "../components/signup/SignupForm";

function Signup() {
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>

      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <SignupFor />
      </Col>
    </Row>
  );
}

export default Signup;

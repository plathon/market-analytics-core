import React from "react";

import SigninForm from "../components/signin/SigninForm";

import { Row, Col } from "antd";

function Signin() {
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <SigninForm />
      </Col>
    </Row>
  );
}

export default Signin;

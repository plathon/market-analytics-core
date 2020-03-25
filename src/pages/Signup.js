import React, { useState, useContext } from "react";
import FirebaseContext from "../context/FirebaseContext";
import { Row, Col } from "antd";

import SignupForm from "../components/signup/SignupForm";

function Signup() {
  const firebase = useContext(FirebaseContext);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <SignupForm isLoading={isLoading} />
      </Col>
    </Row>
  );
}

export default Signup;

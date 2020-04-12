import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, message } from "antd";

import SigninForm from "../components/signin/SigninForm";
import firebaseService from "../services/FirebaseService";

function Signin() {
  const [isLoading, setIsloading] = useState(false);

  const history = useHistory();

  async function handleSignin(user) {
    setIsloading(true);
    const { email, password } = user;
    try {
      await firebaseService.auth().signInWithEmailAndPassword(email, password);
      setIsloading(false);
      history.replace("/");
    } catch (error) {
      message.error(error.message);
      setIsloading(false);
    }
  }

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <SigninForm isLoading={isLoading} handleSignin={handleSignin} />
      </Col>
    </Row>
  );
}

export default Signin;

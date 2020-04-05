import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, message, notification } from "antd";

import ResetPasswordForm from "../components/password/ResetPasswordForm";
import firebaseContext from "../context/FirebaseContext";

const confirmPasswordResetNotification = () =>
  notification.info({
    message: "Please, check your email",
    description: "the confirmation email was send to your email address."
  });

function ResetPassword() {
  const firebase = useContext(firebaseContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleResetPassword(user) {
    const { email } = user;
    setIsLoading(true);
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      confirmPasswordResetNotification();
      setIsLoading(false);
      history.replace("/signin");
    } catch (error) {
      message.error(error.message);
      setIsLoading(false);
    }
  }

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <ResetPasswordForm
          handleResetPassword={handleResetPassword}
          isLoading={isLoading}
        />
      </Col>
    </Row>
  );
}

export default ResetPassword;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseService from "../services/FirebaseService";
import { Row, Col, message, notification } from "antd";

import SignupForm from "../components/signup/SignupForm";

const confirmEmailNotification = () =>
  notification.info({
    message: "Please, confirm your email",
    description: "the confirmation email was send to your email address.",
  });

function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  async function handleSignupUser(user) {
    setIsLoading(true);
    try {
      await firebaseService
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      const profile = {
        displayName: user.name,
      };

      await firebaseService.auth().currentUser.updateProfile(profile);
      await firebaseService.auth().currentUser.sendEmailVerification();

      confirmEmailNotification();

      setIsLoading(false);

      history.replace("/signin");
    } catch (error) {
      setIsLoading(false);
      message.error(error.message);
    }
  }

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <SignupForm isLoading={isLoading} handleSignupUser={handleSignupUser} />
      </Col>
    </Row>
  );
}

export default Signup;

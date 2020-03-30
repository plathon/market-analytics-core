import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/FirebaseContext";
import { Row, Col, message, notification } from "antd";

import SignupForm from "../components/signup/SignupForm";

const confirmEmailNotification = () =>
  notification.info({
    message: "Please, confirm your email",
    description: "the confirmation email was send to your email address."
  });

function Signup() {
  const firebase = useContext(FirebaseContext);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  async function HandleSignupUser(user) {
    setIsLoading(true);
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      const profile = {
        displayName: user.name
      };

      await firebase.auth().currentUser.updateProfile(profile);
      await firebase.auth().currentUser.sendEmailVerification();

      confirmEmailNotification();

      setIsLoading(false);

      history.replace("/signin");
    } catch (error) {
      setIsLoading(false);
      message.error(error);
    }
  }

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10} style={{ marginTop: 100 }}>
        <SignupForm isLoading={isLoading} HandleSignupUser={HandleSignupUser} />
      </Col>
    </Row>
  );
}

export default Signup;

import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebaseContext from "../context/FirebaseContext";

import { Row, Col } from "antd";

import ProfileEditForm from "../components/profile/ProfileEditForm";

function ProfileEdit() {
  const firebase = useContext(firebaseContext);
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) history.push("/signin");
    });
  });
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
      <Col xs={20} sm={16} md={12} lg={10} xl={10}>
        <ProfileEditForm />
      </Col>
    </Row>
  );
}

export default ProfileEdit;

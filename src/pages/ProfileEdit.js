import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseContext from "../context/FirebaseContext";

import { Row, Col, PageHeader, message } from "antd";

import ProfileEditForm from "../components/profile/ProfileEdit";

function ProfileEdit() {
  const [isLoading, setIsloading] = useState(false);
  const firebase = useContext(firebaseContext);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) history.push("/signin");
    });
  });

  function handlerUpdatePassword(userData) {
    return new Promise(async (resolve, reject) => {
      setIsloading(true);
      const { old_password, new_password } = userData;
      try {
        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email,
          old_password
        );

        await user.reauthenticateWithCredential(credential);
        await user.updatePassword(new_password);

        message.success("Password was successfuly updated. ;)");
        setIsloading(false);
        resolve();
      } catch (error) {
        message.error(error.message);
        setIsloading(false);
        reject(error);
      }
    });
  }

  return (
    <div>
      <Row>
        <Col>
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="Profile"
            subTitle="Update user profile"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={10}>
          <ProfileEditForm
            handlerUpdatePassword={handlerUpdatePassword}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProfileEdit;

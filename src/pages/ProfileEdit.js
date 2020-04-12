import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, PageHeader, message, Divider } from "antd";
import firebaseService from "../services/FirebaseService";

import EmailEditForm from "../components/profile/EmailEditForm";
import PasswordEditForm from "../components/profile/PasswordEditForm";
import ProfileEditForm from "../components/profile/ProfileEditForm";

function ProfileEdit() {
  const [isLoading, setIsloading] = useState(false);
  const [isReceivingInitData, setIsReceivingInitData] = useState(true);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhone, setUserPhone] = useState(null);

  const history = useHistory();

  useEffect(() => {
    firebaseService.auth().onAuthStateChanged((user) => {
      if (!user) return history.push("/signin");
      setUserName(user.displayName);
      setUserEmail(user.email);
      setUserPhone(user.phoneNumber);
      setIsReceivingInitData(false);
    });
  }, [history]);

  function handleUpdatePassword(userData) {
    return new Promise(async (resolve, reject) => {
      setIsloading(true);
      const { old_password, new_password } = userData;
      try {
        const user = firebaseService.auth().currentUser;
        const credential = firebaseService.auth.EmailAuthProvider.credential(
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

  async function handleUpdateProfile(userData) {
    setIsloading(true);
    const { name, phone } = userData;
    try {
      await firebaseService.auth().currentUser.updateProfile({
        displayName: name,
        phoneNumber: phone,
      });
      message.success("Profile successfully updated.");
      setIsloading(false);
    } catch (error) {
      message.error(error.message);
      setIsloading(false);
    }
  }

  return (
    <div>
      <Row>
        <Col>
          <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title="Profile"
            subTitle="/edit"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
        <Col xs={20} sm={16} md={12} lg={10} xl={10}>
          <ProfileEditForm
            handleUpdateProfile={handleUpdateProfile}
            isReceivingInitData={isReceivingInitData}
            isLoading={isLoading}
            userName={userName}
            setUserPhone={userPhone}
          />
          <Divider />
          <EmailEditForm
            userEmail={userEmail}
            isReceivingInitData={isReceivingInitData}
          />
          <Divider />
          <PasswordEditForm
            isLoading={isLoading}
            handleUpdatePassword={handleUpdatePassword}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProfileEdit;

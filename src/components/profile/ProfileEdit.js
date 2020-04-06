import React from "react";
import { Divider } from "antd";

import EmailEditForm from "./EmailEditForm";
import PasswordEditForm from "./PasswordEditForm";
import ProfileEditForm from "./ProfileEditForm";

function ProfileEdit({ isLoading, handlerUpdatePassword }) {
  return (
    <div>
      <ProfileEditForm />
      <Divider />
      <EmailEditForm />
      <Divider />
      <PasswordEditForm
        isLoading={isLoading}
        handlerUpdatePassword={handlerUpdatePassword}
      />
    </div>
  );
}

export default ProfileEdit;

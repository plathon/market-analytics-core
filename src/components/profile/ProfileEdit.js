import React from "react";
import { Divider } from "antd";

import EmailEditForm from "./EmailEditForm";
import PasswordEditForm from "./PasswordEditForm";
import ProfileEditForm from "./ProfileEditForm";

function ProfileEdit() {
  return (
    <div>
      <EmailEditForm />
      <Divider />
      <PasswordEditForm />
      <Divider />
      <ProfileEditForm />
    </div>
  );
}

export default ProfileEdit;

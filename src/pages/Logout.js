import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import firebaseService from "../services/FirebaseService";
import { message } from "antd";

function Logout() {
  const location = useLocation();

  (async function logUserOut() {
    try {
      await firebaseService.auth().signOut();
    } catch (error) {
      message.error(error.message);
    }
  })();

  return (
    <div>
      <Redirect to={{ pathname: "/signin", state: { from: location } }} />
    </div>
  );
}

export default Logout;

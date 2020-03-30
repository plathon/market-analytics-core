import React, { useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import firebaseContext from "../context/FirebaseContext";
import { message } from "antd";

function Logout() {
  const firebase = useContext(firebaseContext);
  const location = useLocation();

  (async function logUserOut() {
    try {
      await firebase.auth().signOut();
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

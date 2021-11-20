import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent";
import "../Styles/ProfileScreen.css";

const ProfileScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 col-xxl-2 col-xl-2 col-l-2 col-md-2">
          <NavigationSidebar active="profile" />
        </div>
        <div className="col-10 col-xxl-10 col-xl-10 col-l-10 col-md-10">
          <ProfileComponent />
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

import React from "react";
import EditProfileComponent from "./EditProfileComponent";
import NavigationSidebar from "../NavigationSidebar";
import "../Styles/EditProfile.css";

const EditProfile = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 col-xxl-2 col-xl-2 col-l-2 col-md-2">
          <NavigationSidebar active="profile" />
        </div>
        <div className="col-10 col-xxl-10 col-xl-10 col-l-10 col-md-10">
          <EditProfileComponent />
        </div>
      </div>
    </>
  );
};

export default EditProfile;

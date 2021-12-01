import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
import "../Styles/ExploreScreen.css";

const ExploreScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 col-xxl-2 col-xl-2 col-l-2 col-md-2">
          <NavigationSidebar active="explore" />
        </div>
        <div className="col-7 col-xxl-7 col-xl-7 col-l-7 col-md-6">
          <ExploreComponent />
        </div>
        <div className="col-3 col-xxl-3 col-xl-3 col-l-3 col-md-4 who-to-follow-list">
          <WhoToFollowList />
        </div>
      </div>
    </>
  );
};

export default ExploreScreen;

import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import HomeComponent from "./HomeComponent";
import "../Styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 col-xxl-2 col-xl-2 col-l-2 col-md-2">
          <NavigationSidebar active="home" />
        </div>
        <div className="col-7 col-xxl-7 col-xl-7 col-l-7 col-md-6">
          <HomeComponent />
        </div>
        <div className="col-3 col-xxl-3 col-xl-3 col-l-3 col-md-4 post-summary-list">
          <PostSummaryList />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

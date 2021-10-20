import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action ">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          to="/a6/twitter/home"
          className={`list-group-item list-group-item-action ${
            active === "home" ? "active" : ""
          }`}
        >
          <i className="fa fa-home"></i>
          <span className="d-none d-xl-inline">Home</span>
        </Link>
        <Link
          to="/a6/twitter/explore"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "active" : ""
          }`}
        >
          <i className="fa fa-hashtag"></i>
          <span className="d-none d-xl-inline">Explore</span>
        </Link>
        <Link
          to="/a6/twitter/notifications"
          className={`list-group-item list-group-item-action ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <i className="far fa-bell"></i>
          <span className="list-group-item-text">Notifications</span>
        </Link>
        <Link
          to="/a6/twitter/messages"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "messages" : ""
          }`}
        >
          <i className="far fa-envelope"></i>
          <span className="list-group-item-text">Messages</span>
        </Link>
        <Link
          to="/a6/twitter/bookmarks"
          className={`list-group-item list-group-item-action ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <i className="far fa-bookmark"></i>
          <span className="list-group-item-text">Bookmarks</span>
        </Link>

        <Link
          to="/a6/twitter/list"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "list" : ""
          }`}
        >
          <i className="fas fa-list"></i>
          <span className="list-group-item-text">List</span>
        </Link>
        <Link
          to="/a6/twitter/profile"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "profile" : ""
          }`}
        >
          <i className="far fa-user"></i>
          <span className="list-group-item-text">Profile</span>
        </Link>
        <Link
          to="/a6/twitter/more"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "more" : ""
          }`}
        >
          <i className="fas fa-minus-circle"></i>
          <span className="list-group-item-text">More</span>
        </Link>
      </div>
      <div className="d-grid gap-2 mt-2">
        <button className="btn btn-primary" type="button">
          Tweet
        </button>
      </div>
    </>
  );
};
export default NavigationSidebar;

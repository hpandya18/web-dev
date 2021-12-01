import React from "react";

import tweets from "../reducers/tweets";
import who from "../reducers/who";
import profile from "../reducers/profile";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfile from "./EditProfile";

const reducer = combineReducers({ tweets: tweets, who, profile });
const store = createStore(reducer);

const Build = () => {
  return (
    <Provider store={store}>
      <div>
        <Route
          path={["/", "/a9/twitter/home", "/a9", "/a9/twitter"]}
          exact={true}
          component={HomeScreen}
        />
        <Route
          path="/a9/twitter/explore"
          exact={true}
          component={ExploreScreen}
        />
        <Route
          path="/a9/twitter/profile"
          exact={true}
          component={ProfileScreen}
        />
        <Route
          path="/a9/twitter/edit-profile"
          exact={true}
          component={EditProfile}
        />
      </div>
    </Provider>
  );
};
export default Build;

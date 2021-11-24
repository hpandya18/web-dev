import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../../../services/profileService";

const selectProfile = (state) => state.profile.profile;

const ProfileComponent = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  useEffect(() => getCurrentProfile(dispatch, {}));
  // const dispatch = useDispatch();
  // const updateProfileClickHandler = () => {
  //   dispatch({ type: "update-profile", profile });
  // };
  return (
    <>
      <div>
        <div className="back-div">
          <div className="back-button">
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="user-name">
            {profile.firstName} {profile.lastName}
          </div>
        </div>
        <div className="tweet-count">{profile.stats.tweets} Tweets</div>
      </div>
      <div>
        <img
          src={profile.coverImage}
          className="cover-image"
          alt="Cover Image"
        />
      </div>
      <div>
        <img
          src={profile.profileImage}
          className="profile-image"
          alt="Profile Image"
        />
        <div className="edit-profile-button">
          <Link to="/a8/twitter/edit-profile">
            <button className="btn btn-dark">Edit Profile</button>
          </Link>
        </div>
      </div>
      <div className="profile-details">
        <div className="user-name">
          {profile.firstName} {profile.lastName}
        </div>
        <div className="handle">{profile.handle}</div>
        <div className="description">{profile.bio}</div>
        <div className="user-details">
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <span className="location">{profile.location} </span>
          </div>
          <div>
            <i className="fas fa-birthday-cake"></i>
            <span className="birthday">{profile.birthday} </span>
          </div>
          <div>
            <i className="far fa-calendar"></i>
            <span className="joining">{profile.joiningDate} </span>
          </div>
        </div>
        <div className="follower-details">
          <span className="count-details">{profile.stats.following} </span>
          Following
          <span>{"\t"}</span>
          <span className="count-details">{profile.stats.followers} </span>
          Followers
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;

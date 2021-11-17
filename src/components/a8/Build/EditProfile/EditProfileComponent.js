import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../../../../services/profileService";

const selectProfile = (state) => state.profile.profile;

const EditProfileComponent = () => {
  const profile = useSelector(selectProfile);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = () => {
    let names = {};
    if (inputs.name) {
      const firstName = inputs["name"].split(" ")[0];
      const lastName = inputs["name"].split(" ")[1];
      names = { firstName, lastName };
    }
    const newProfile = { ...profile, ...inputs, ...names };
    updateProfile(dispatch, newProfile);
  };

  return (
    <>
      <form>
        <div>
          <div className="edit-profile-title-div">
            <div className="cancel-button">
              <Link to="/a8s/twitter/profile">
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <div className="edit-profile-text">Edit Profile</div>
            <div className="save-button">
              <Link
                className="btn btn-save"
                to="/a8/twitter/profile"
                onClick={onSubmit}
              >
                Save
              </Link>
            </div>
          </div>
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
            className="edit-profile-image"
            alt="Profile Image"
          />
        </div>
        <div className="update-details">
          <ul className="list-group">
            <li className="list-group-item">
              <label> Name</label>
              <input
                onChange={onChangeHandler}
                defaultValue={profile.firstName + " " + profile.lastName}
                className="form-control"
                name="name"
              />
            </li>
            <li className="list-group-item">
              <label> Bio</label>
              <textarea
                onChange={onChangeHandler}
                defaultValue={profile.bio}
                className="form-control"
                name="bio"
              ></textarea>
            </li>
            <li className="list-group-item">
              <label> Location</label>
              <input
                onChange={onChangeHandler}
                defaultValue={profile.location}
                className="form-control"
                name="location"
              />
            </li>
            <li className="list-group-item">
              <label> Website</label>
              <input
                onChange={onChangeHandler}
                defaultValue={profile.website}
                className="form-control"
                name="website"
              />
            </li>
            <li className="list-group-item">
              <label> Birth date</label>
              <input
                onChange={onChangeHandler}
                defaultValue={profile.birthday}
                className="form-control"
                name="birthday"
              />
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default EditProfileComponent;

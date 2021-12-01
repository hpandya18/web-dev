const PROFILE_API = "http://localhost:4000/api/profile";
// const PROFILE_API =
//   "https://web-dev-twitter-clone.herokuapp.com/api/profile";

export const updateProfile = (dispatch, profile) => {
  console.log("=======", profile);
  fetch(`${PROFILE_API}`, {
    method: "PUT",
    body: JSON.stringify(profile),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((profile) =>
      dispatch({
        type: "update-profile",
        profile,
      })
    );
};

export const getCurrentProfile = (dispatch, profile) =>
  fetch(`${PROFILE_API}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((profile) => {
      dispatch({
        type: "fetch-profile",
        profile,
      });
    });

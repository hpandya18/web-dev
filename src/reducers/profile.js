import owner from "./data/profile.json";

const initialState = {
  profile: owner,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case "update-profile":
      console.log(action.profile);
      const newProfile = {};
      if (action.profile.name) {
        newProfile["firstName"] = action.profile["name"].split(" ")[0];
        newProfile["lastName"] = action.profile["name"].split(" ")[1];
      }
      return {
        profile: {
          ...state.profile,
          ...action.profile,
          ...newProfile,
        },
      };

    default:
      return state;
  }
};

export default profile;

import whoJson from "./data/who.json";

const initialState = {
  who: whoJson,
};

const who = (state = initialState, action) => {
  switch (action.type) {
    case "fetch-all-whos":
      return { who: action.whos };
    default:
      return state;
  }
};

export default who;

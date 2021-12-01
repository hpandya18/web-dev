// const WHO_API = "http://localhost:4000/rest/who";
const WHO_API = " https://web-dev-twitter-clone.herokuapp.com/rest/tweets";

export const fetchAllWhos = (dispatch) =>
  fetch(WHO_API)
    .then((response) => {
      return response.json();
    })
    .then((whos) =>
      dispatch({
        type: "fetch-all-whos",
        whos,
      })
    );

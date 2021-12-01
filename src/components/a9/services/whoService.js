const WHO_API = "http://localhost:4000/api/who";
// const WHO_API = "https://web-dev-twitter-clone.herokuapp.com/api/who";

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

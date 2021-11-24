let movies = [
  { _id: 1, title: "Aliens", rating: 4.5 },
  { _id: 2, title: "Terminator", rating: 4.8 },
  { _id: 3, title: "Avatar", rating: 4.7 },
];
module.exports = (app) => {
  const getAllMovies = (req, res) => res.json(movies);
  app.get("/api/movies", getAllMovies);

  const deleteMovie = (req, res) => {
    const id = req.params["mid"];
    console.log(req.params);
    movies = movies.filter((m) => m._id !== parseInt(id));
    res.json(movies);
  };
  app.delete("/api/movies/:mid", deleteMovie);

  const createMovie = (req, res) => {
    const movie = req.body;
    console.log(movie);
    movies = [...movies, movie];
    res.json(movies);
  };
  app.post("/api/movies", createMovie);

  const saveMovie = (req, res) => {
    const newMovie = req.body;
    const movieId = req.params["mid"];
    console.log(movieId);
    movies = movies.map((movie) =>
      movie._id === parseInt(movieId) ? newMovie : movie
    );
    console.log(movies);
    res.json(movies);
  };
  app.put("/api/movies/:mid", saveMovie);
};

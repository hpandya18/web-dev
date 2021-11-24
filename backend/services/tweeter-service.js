const dao = require("../db/tweets/tweet-dao");

module.exports = (app) => {
  const findAllTweets = (req, res) => {
    dao.findAllTweets().then((tweets) => res.json(tweets));
  };

  app.get("/api/tweets", findAllTweets);

  const postNewTweet = (req, res) => {
    const newTweet = {
      topic: "Web Development",
      userName: "ReactJS",
      verified: false,
      handle: "ReactJS",
      time: "2h",
      "avatar-image": "../../../images/react-blue.png",
      "logo-image": "../../../images/react-blue.png",
      stats: {
        comments: 123,
        retweets: 234,
        likes: 345,
      },
      ...req.body,
    };
    dao.createTweet(newTweet).then((response) => {
      dao.findAllTweets().then((tweets) => res.json(tweets));
    });
  };

  app.post("/api/tweets", postNewTweet);

  const deleteTweet = (req, res) => {
    const id = req.params["id"];
    dao.deleteTweet(id).then((response) => {
      dao.findAllTweets().then((tweets) => res.json(tweets));
    });
  };
  app.delete("/api/tweets/:id", deleteTweet);

  const likeTweet = (req, res) => {
    const id = req.params["id"];
    dao.findTweetById(id).then((tweet) => {
      console.log(tweet);
      if (tweet.liked === true) {
        tweet.liked = false;
        tweet.stats.likes--;
      } else {
        tweet.liked = true;
        tweet.stats.likes++;
      }
      dao.updateTweet(id, tweet).then((response) => {
        res.json(response);
      });
    });
  };
  app.put("/api/tweets/:id/like", likeTweet);
};

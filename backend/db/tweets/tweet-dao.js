const model = require("./tweet-model");

const findAllTweets = () => {
  return model.find();
};

const findTweetById = (id) => {
  return model.findById(id);
};
const createTweet = (tweet) => {
  return model.create(tweet);
};
const deleteTweet = (id) => {
  return model.deleteOne({ _id: id });
};
const updateTweet = (id, tweet) => {
  return model.updateOne({ _id: id }, { $set: tweet });
};

module.exports = {
  findAllTweets,
  createTweet,
  deleteTweet,
  updateTweet,
  findTweetById,
};

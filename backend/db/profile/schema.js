const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    handle: String,
    coverImage: String,
    profileImage: String,
    firstName: String,
    lastName: String,
    location: String,
    birthday: String,
    joiningDate: String,
    bio: String,
    stats: {
      following: { type: Number, defaultValue: 0 },
      followers: { type: Number, defaultValue: 0 },
      tweets: { type: Number, defaultValue: 0 },
    },
  },
  { collection: "profile" }
);
module.exports = schema;

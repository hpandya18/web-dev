const model = require("./model");

const findProfile = () => {
  return model.find();
};
const updateProfile = (profile) => {
  return model.updateOne({ _id: profile._id }, { $set: profile });
};

module.exports = {
  findProfile,
  updateProfile,
};

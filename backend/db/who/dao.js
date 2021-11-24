const model = require("./model");

const findAllWho = () => {
  return model.find();
};

module.exports = {
  findAllWho,
};

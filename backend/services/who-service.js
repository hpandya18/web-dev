const dao = require("../db/who/dao");

module.exports = (app) => {
  const findAllWho = (req, res) =>
    dao.findAllWho().then((who) => res.json(who));
  app.get("/api/who", findAllWho);
};

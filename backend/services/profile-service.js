let dao = require("../db/profile/dao");
module.exports = (app) => {
  const getCurrentProfile = (req, res) => {
    dao.findProfile().then((profile) => {
      res.json(profile[0]);
    });
  };
  app.get("/api/profile/", getCurrentProfile);

  const updateCurrentProfile = (req, res) => {
    const newProfile = req.body;
    profile = newProfile;
    dao.updateProfile(profile).then((profile) => {
      res.json(profile);
    });
  };
  app.put("/api/profile/", updateCurrentProfile);
};

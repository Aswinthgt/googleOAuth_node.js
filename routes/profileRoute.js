const profileRoutes = require("express").Router();
const { profileController } = require("../controllers/profileController");

profileRoutes.get("/profile", profileController);

module.exports = profileRoutes;

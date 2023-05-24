const authRoutes = require("express").Router();
const passport = require("passport");

authRoutes.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authRoutes.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:4200/profile",
    failureRedirect: "auth/error",
  })
);

authRoutes.get("/error", (req, res) => {
  res.send("authentication failed");
});

module.exports = authRoutes;

const passport = require("passport");
const GoogleStatergy = require("passport-google-oauth20").Strategy;
const config = require("../config/dotenv.js");
const { createUser, findUser } = require("../services/userService.js");

passport.use(
  new GoogleStatergy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://${config.HOST}:${config.PORT}/auth/google/callback`,
      passReqToCallback: true,
    },
    async (accessToken, refreshToken, params, profile, done) => {
      try {
        const registeredUser = await findUser(profile)
        if(registeredUser) {
          return done(null, registeredUser)
        }
        const user = await createUser(profile);
        done(null, user);
      } catch (ex) {
        done(ex, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

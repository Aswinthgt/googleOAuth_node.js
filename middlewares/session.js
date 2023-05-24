const expressSession = require("express-session");
const config = require("../config/dotenv");

const session = expressSession({
 secret: config.SECRET_SESSION,
 resave: true,
 saveUninitialized: true
})

module.exports = {session}
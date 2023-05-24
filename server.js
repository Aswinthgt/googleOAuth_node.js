const express = require("express");
const cors = require("cors");
const config = require("./config/dotenv.js");
const { session } = require("./middlewares/session.js");
const passport = require("passport");
require("./middlewares/passport.js");
const connectDB = require("./config/database.js");
const {verify} = require("./middlewares/isverifed.js");
const app = express();
connectDB();


const authRoutes = require("./routes/authRoutes.js");
const profileRoute = require("./routes/profileRoute.js");

app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}))

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(verify);



app.use("/auth", authRoutes);
app.use("/dashboard", profileRoute)



app.listen(config.PORT, config.HOST, () => {
  console.log(`Server Started at http://${config.HOST}:${config.PORT}`);
});

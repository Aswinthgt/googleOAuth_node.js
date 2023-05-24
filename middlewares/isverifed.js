const { User } = require("../models/users");


const verify = async (req, res, next) => {
  try {
    const authPath = req.path.split("/")[1];
    if(authPath === "auth") {
      return next();
    } 
    const user = await User.findOne({ id: req.user.id });
    if (!user) {
      return res.status(401).json({ message: "User Not Found" });
    }
    next();
  } catch (ex) {
    res.status(404).json({ message: "User Not Found" });
  }
};


module.exports = {verify}
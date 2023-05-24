const { User } = require("../models/users");


const profileController = async (req, res) => {
    const user = await User.findOne({ id: req.user.id });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.json({ message: true });
  };
  

module.exports = {profileController}
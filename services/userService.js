const { User } = require("../models/users");

const createUser = async (profile) => {
  try {
    const user = new User({
      id: profile.id,
      displayName: profile.displayName,
      image: profile.photos[0].value,
      emails: [
        {
          value: profile.emails[0].value,
          verified: profile.emails[0].verified,
        },
      ],
    });

    await user.save();
    return user;
  } catch (ex) {
    throw new Error("Failed to create user");
  }
};

const findUser = async (users) => {
  const user = await User.findOne({ id: users.id });
  if (!user) {
    return false;
  }
  return user;
};

module.exports = { createUser, findUser };

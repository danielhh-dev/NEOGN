const db = require("../../database/db");

const deleteUser = async (id) => {
  let user = await db.User.findByPk(id);

  if (!user) {
    throw new Error("User not found");
  };

  if (user.isDisabled) {
    throw new Error("User is already disable")
  };

  user.isDisabled = true;

  await user.save();
};

module.exports = deleteUser;

//Xz
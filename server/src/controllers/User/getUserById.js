const db = require("../../database/db");

const getUser = async (id) => {
  const user = await db.User.findByPk(id, {
    include: [
      {
        model: db.Order,
      },
      {
        model: db.Product,
      },
    ],
  });

  if (!user) {
    throw new Error("User not found");
  };

  return user;
};

module.exports = getUser;

//Xz
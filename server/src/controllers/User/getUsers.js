const db = require("../../database/db");

const getUsers = async () => {
  try {
    const users = await db.User.findAll();

    return users;
  } catch (error) {
    console.log(error);
    
    throw new Error("There was an error:", error.message);
  };
};

module.exports = getUsers;

//Xz
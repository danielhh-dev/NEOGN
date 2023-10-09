const db = require("../../db");
const { tokenGenerator } = require("../../middlewares/jsonWebToken");
const { JWT_SIGN } = process.env;
const { sendRegistrationEmail } = require("../../utils/email");

const signUp = async (clientId, name, email, photo) => {

  const newUser = await db.User.create({
    clientId,
    name,
    email,
    photo,
  });

  const token = await tokenGenerator(
    {
      clientId: newUser.clientId,
      name: newUser.name,
      email: newUser.email,
      photo: newUser.photo,
    },
    `${JWT_SIGN}`
  );

  sendRegistrationEmail(newUser.id);

  return token;
};

module.exports = signUp;

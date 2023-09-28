const { Router } = require("express");

const getUsers = require("../controllers/User/getUsers");
const getUserById = require("../controllers/User/getUserById");
const deleteUser = require("../controllers/User/deleteUser");
const signUp = require("../controllers/User/signUp");
const login = require("../controllers/User/login");

const router = Router();

//GET
router.get("/", async (req, res) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ error: error.message })
  };
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await getUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ error: error.message });
  }
})

//LOGICAL DELETION
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const message = await deleteUser(id);

    return res.status(200).json({ message });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ error: error.message });
  }
});

//POST
router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password, photo } = req.body;
    console.log(req.body);

    const newUser = await signUp({ name, username, email, password, photo })

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);

    res.status(400).send(error.message)
  };
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    await login(email, password);

    return res.status(200).json({ access: true });
  } catch (error) {
    console.log(error.message);

    res.status(400).send(error.message);
  };
})

module.exports = router;
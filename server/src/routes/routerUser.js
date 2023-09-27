const { Router } = require("express");

const getUsers = require("../controllers/User/getUsers");
const getUserById = require("../controllers/User/getUserById");
const deleteUser = require("../controllers/User/deleteUser");

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

    await deleteUser(id);

    return res.status(200).json({ message: "The user has been deleted" });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
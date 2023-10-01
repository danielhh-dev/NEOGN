const { Router } = require("express");
const router = Router();
const { handlerGetProducts} = require("../controllers/handlers/handlerGetProducts");
const { handlerGetById } = require("../controllers/handlers/handlerGetByID");
const { handlersCreateProducts} = require("../controllers/handlers/handlersCreateProducts");
const {handlerDeleteById} = require ('../controllers/handlers/handlerDeleteById')
const products = require("../../api/db.json");

// router.get("/", handlerGetProducts);
router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:id", handlerGetById);
router.post("/create", handlersCreateProducts);
router.delete('/:id', handlerDeleteById);
module.exports = router;

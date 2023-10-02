const { Router } = require("express");
const router = Router();
const {
  handlerGetProducts,
} = require("../controllers/handlers/handlerGetProducts");
const { handlerGetById } = require("../controllers/handlers/handlerGetByID");
const {
  handlersCreateProducts,
} = require("../controllers/handlers/handlersCreateProducts");
const getFilteredProducts = require("../controllers/Products/getProductFilter");
const products = require("../../api/db.json");

router.get("/:id", handlerGetById);
// router.get("/", handlerGetProducts);
router.get("/", (req, res) => {
  res.json(products);
});
router.get("/filter", getFilteredProducts);

router.post("/create", handlersCreateProducts);

module.exports = router;

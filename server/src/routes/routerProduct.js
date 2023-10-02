const { Router } = require("express");
const router = Router();
const {
  handlerGetProducts,
} = require("../controllers/handlers/handlerGetProducts");
const { handlerGetById } = require("../controllers/handlers/handlerGetByID");
const {
  handlersCreateProducts,
} = require("../controllers/handlers/handlersCreateProducts");
const {
  handlerDeleteById,
} = require("../controllers/handlers/handlerDeleteById");
const getFilteredProducts = require("../controllers/Products/getProductFilter");
const products = require("../../api/db.json");

router.get("/:id", handlerGetById);
// router.get("/", handlerGetProducts);
router.get("/", (req, res) => {
  res.json(products);
});
router.get("/filter", (req, res) => {
  try {
    const { category, min, max, order, price, review } = req.query;
    const products = getFilteredProducts(
      category,
      min,
      max,
      order,
      price,
      review
    );
    res.status(200).res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "An expected error has ocurred" });
  }
});

router.post("/create", handlersCreateProducts);
router.delete("/:id", handlerDeleteById);

module.exports = router;

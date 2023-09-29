const { Router } = require("express");
const router = Router();
const {handlerGetProducts} = require ('../controllers/handlers/handlerGetProducts');
const { handlerGetById } = require("../controllers/handlers/handlerGetByID");
const {handlersCreateProducts} = require("../controllers/handlers/handlersCreateProducts");



router.get("/:id", handlerGetById);
router.get("/", handlerGetProducts);
router.post("/create", handlersCreateProducts);




module.exports = router;

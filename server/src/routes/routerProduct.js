const { Router } = require("express");
const router = Router();
const handlersCreateProducts = require("../controllers/handlers/handlersCreateProducts");
const {handlerGetProducts} = require ('../controllers/handlers/handlerGetProducts')



router.get("/", handlerGetProducts);

router.post("/create", handlersCreateProducts);




module.exports = router;
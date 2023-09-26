const { Router } = require("express");

const routerProduct = require("./routerProduct");
const routerUser = require("./routerUser");

const router = Router();

router.use("/products", routerProduct);
router.use("/user", routerUser);

module.exports = router;
const { Router } = require("express");

const routerProduct = require("./routerProduct");
const routerUser = require("./routerUser");
const routerOrders = require("./routerOrder");

const router = Router();

router.use("/products", routerProduct);
router.use("/user", routerUser);
router.use("/order", routerOrders);

module.exports = router;

const { Router } = require("express");
const routerProduct = require("./routerProduct");
const routerUser = require("./routerUser");
const routerOrders = require("./routerOrder");

const router = Router();

router.use("/products", routerProduct);
router.use("/users", routerUser);
router.use("/orders", routerOrders);

module.exports = router;

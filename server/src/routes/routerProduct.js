const { Router } = require("express");
const router = Router();
const api = require("../../api/db.json");

router.get("/", (req, res) => {
  res.json(api);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const service = new require("../service/service");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const result = await service.getSearch(req.query);
  res.send(result);
});

module.exports = router;

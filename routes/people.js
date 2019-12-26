const express = require("express");
const router = express.Router();
const service = new require("../service/service");

/* GET users listing. */
router.get("/", (req, res, next) => {
  service.getPeople().then(res => console.log(JSON.stringify(res)));
});

module.exports = router;

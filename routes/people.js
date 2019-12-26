const express = require("express");
const router = express.Router();
const service = new require("../service/service");

/* GET users listing. */
router.get("/", (req, res, next) => {
  service.getPeople().then(responce => {
    console.log(JSON.stringify(responce));
    return res.send(responce);
  });
});

module.exports = router;

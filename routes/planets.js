const express = require("express");
const router = express.Router();
const service = new require("../service/service");

/* GET users listing. */
router.get("/", (req, res, next) => {
  console.log(req.query);
  if (req.query) {
    service.getPlanets(req.query).then(responce => {
      return res.send(responce);
    });
  } else next();
});
router.get("/:id", (req, res, next) => {
  const parameters = req.params;
  service.getPlanets(parameters).then(responce => {
    return res.send(responce);
  });
});

module.exports = router;

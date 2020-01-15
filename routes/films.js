const express = require("express");
const router = express.Router();
const service = new require("../service/service");

/* GET users listing. */
router.get("/", (req, res, next) => {
  if (req.query) {
    service.getFilms(req.query).then(responce => {
      console.log(req.query);
      return res.send(responce);
    });
  } else next();
});
router.get("/:id", (req, res, next) => {
  const parameters = req.params;
  service.getFilms(parameters).then(responce => {
    return res.send(responce);
  });
});

module.exports = router;

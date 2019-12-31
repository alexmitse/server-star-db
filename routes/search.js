const express = require("express");
const router = express.Router();
const service = new require("../service/service");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const result = await Promise.all([
    service.getSpecies(req.query),
    service.getPeople(req.query),
    service.getPlanets(req.query),
    service.getFilms(req.query),
    service.getStarships(req.query),
    service.getVehicles(req.query)
  ]);
  res.send(result);
});

module.exports = router;

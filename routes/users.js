const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  return res.status(200).json({
    users: ["dsadas", "dsaasd"]
  });
});

module.exports = router;

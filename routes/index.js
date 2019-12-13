var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Hello world" });
// });

router.get("/", (req, res, next) => {
  return res.send("hello world");
});

module.exports = router;

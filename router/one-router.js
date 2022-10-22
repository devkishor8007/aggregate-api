const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  createMany,
  matchOne,
  paginationOne,
} = require("../controller/one-controller");

router.route("/").get(findAll).post(create);
router.post("/create-dummy", createMany);
router.get("/match", matchOne);
router.get("/pagination", paginationOne);

module.exports = router;
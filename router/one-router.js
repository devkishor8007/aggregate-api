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

// GET: localhost:5000/  get all
// GET: localhost:5000/match  get the price is greater than 450
// POST: localhost:5000/create-dummy  create a dummy list of object
// POST: localhost:5000/ create a dummy object of name, price & address
// GET: localhost:5000/pagination?limit=5&skip=0&price=250 
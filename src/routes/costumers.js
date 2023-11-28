const { postCostumer } = require("../controllers/Customers/CRUD");

const router = require("express").Router();

router.post("/", postCostumer);

module.exports = router;

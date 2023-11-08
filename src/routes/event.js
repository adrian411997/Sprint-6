const {
  postEvent,
  deleteAnEvent,
  getAllEvents,
  getAnEvent,
  updateAnEvent,
} = require("../controllers/Events/CRUD");
const router = require("express").Router();

router.post("/add", postEvent);
router.get("/", getAllEvents);
router.delete("/delete/:id", deleteAnEvent);
router.get("/:id", getAnEvent);
router.put("/:id", updateAnEvent);
module.exports = router;

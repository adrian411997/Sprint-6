const { Router } = require("express");

const eventsRouter = require("./event");
const router = Router();

router.use("/events", eventsRouter);

module.exports = router;

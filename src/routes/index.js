const { Router } = require("express");

const eventsRouter = require("./event");
const eventsCostumers = require("./costumers");
const router = Router();

router.use("/events", eventsRouter);
router.use("/costumers", eventsCostumers);
module.exports = router;

const router = require("express").Router();
const { addBooking } = require("../controller/bookingController");

const authorized = require("../utils/middleware");

router.post("/add", addBooking);

module.exports = router;

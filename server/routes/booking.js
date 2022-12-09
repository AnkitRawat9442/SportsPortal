const router = require("express").Router();
const { addBooking , BookedSports } = require("../controller/bookingController");

const authorized = require("../utils/middleware");

router.post("/add", addBooking);
router.get("/bookedSports", BookedSports);

module.exports = router;

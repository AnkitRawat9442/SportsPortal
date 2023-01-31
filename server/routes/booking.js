const router = require("express").Router();
const { addBooking , BookedSports  , DeleteBooking } = require("../controller/bookingController");

const authorized = require("../utils/middleware");

router.post("/add", addBooking);
router.get("/bookedSports", BookedSports);
router.delete("/deleteSports/:id", DeleteBooking);

module.exports = router;


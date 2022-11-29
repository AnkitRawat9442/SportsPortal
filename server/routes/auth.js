const router = require("express").Router();

const {
    studentLogin,
    studentRegistration,
} = require("../controller/authController");

router.post("/login", studentLogin);

router.post("/register", studentRegistration);

module.exports = router;

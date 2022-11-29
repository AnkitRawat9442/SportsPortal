const Student = require("../model/Student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../utils/validation");

async function studentRegistration(req, res, next) {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const student = new Student({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        college: req.body.college,
    });

    let existingUser = await Student.findOne({ id: student.id });
    if (existingUser) return res.status(400).json("Student already exist");
    existingUser = await Student.findOne({ email: student.email });
    if (existingUser) return res.status(400).json("Student already exist");

    const savedUser = await student.save();
    return res.json(savedUser);
}

async function studentLogin(req, res, next) {
    console.log(req.body);
    const { error } = loginValidation(req.body);
    if (error) {
        console.log(error)
        return res.status(400).json(error.details[0].message);
    }

    const student = await Student.findOne({ id: req.body.id });
    if (!student) return res.status(400).json("Student doesn't exist ");
    const validPass = await bcrypt.compare(req.body.password, student.password);
    if (!student || !validPass)
        return res
            .status(401)
            .json("You have entered an invalid id or password");
    console.log(student);
    const accessToken = jwt.sign(
        { _id: student._id, id: student.id, username: student.name },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "24h",
        }
    );
    console.log(accessToken);
    return res.status(200).json(student);
}

module.exports = {
    studentRegistration,
    studentLogin,
};

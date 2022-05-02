const router = require("express").Router();

const {
  studentSignup,
  signin,
} = require("../../Controller/User/user.js");

router.post("/studentSignup", studentSignup);
router.post("/signin", signin);

module.exports = router;
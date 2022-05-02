const router = require("express").Router();

const {
    AddQuiz,
    GetAllQuiz
} = require("../../Controller/Teacher/Teacher.js");

router.post("/AddQuiz", AddQuiz);
router.get("/GetAllQuiz", GetAllQuiz);

module.exports = router;

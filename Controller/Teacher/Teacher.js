const QuizCollection = require("../../Models/teacher/addQuiz.js");
const ObjectId = require("mongodb").ObjectId;

const AddQuiz = async (req, res) => {

    const quiz = new QuizCollection(req.body);
    await quiz.save()
    res.send({success: 'success'})
};

const GetAllQuiz = async (req, res) => {
    const quizType = req.query.type;
    const subject = req.query.subject;

    const quizes = await QuizCollection.find({quizType: quizType, subject: subject});
    res.send(quizes)

};

module.exports = {
    AddQuiz,
    GetAllQuiz
};

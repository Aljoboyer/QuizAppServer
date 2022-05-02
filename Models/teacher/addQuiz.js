const mongoose = require("mongoose");

const QuizCollection = mongoose.Schema({
    correct: {type : String},
    option1:{type : String},
    option2:{type : String},
    option3: {type : String},
    option4:{type : String},
    option5:{type : String},
    question: {type : String},
    quizType: {type: String},
    subject:{type : String},
});

module.exports  = mongoose.model("QuizCollection", QuizCollection);

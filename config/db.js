const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = `mongodb+srv://${process.env.ID}:${process.env.PASS}@cluster0.vsy2x.mongodb.net/QuizApp?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(
      mongoUri,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
      console.log("connected to database")
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

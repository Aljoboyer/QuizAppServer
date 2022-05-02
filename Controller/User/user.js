const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserCollection = require("../../Models/user/user.js");
const secret = "test";

const signin = async (req, res) => {
  const { email, password } = req.body;
 

  try {
    const oldUser = await UserCollection.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

// studentSignup
const studentSignup = async (req, res) => {
  const { email, password, firstName, lastName, phone, role } = req.body;
  console.log('data', req.body);
  try {
    const oldUser = await UserCollection.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserCollection.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      phone,
      role,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};


module.exports = {
  signin,
  studentSignup,
};

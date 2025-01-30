const bcrypt = require('bcrypt');
const User = require('../models/User');


// Create new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, phone_number, address, user_type } = req.body;

    // Check if email already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,  // Save hashed password to 'password' field
      phone_number,
      address,
      user_type,
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    console.log("hello")
    const { email, password } = req.body;
    console.log(email,password)
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (isMatch) {
    //   const token = createToken(user._id);
    //   res.json({ success: true, token });
    // } else {
    //   res.json({ success: false, message: "Invalid credentials" });
    // }
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


module.exports = { createUser,loginUser };
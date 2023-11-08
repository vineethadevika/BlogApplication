

import User from "../models/user";
import bcrypt from "bcryptjs";


// Function to check if an email exists in the database
export const checkEmailExists = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

// Function to reset the user's password
export const resetPasswordController = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const hashedPassword = bcrypt.hashSync(newPassword);

    // Update the user's password
    user.password = hashedPassword;

    // Save the updated user document
    await user.save();

    return res.status(200).json({ success: true, message: 'Password updated successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

// Your other controller functions (getAllUser, signup, login) go here...

// Your other controller functions (getAllUser, signup, login) go here...


export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User Already Exists! Login Instead' });
    }
    
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      blogs: [],
    });
    
    await user.save();
    
    return res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    
    if (!existingUser) {
      return res.status(404).json({ message: 'Couldnt Find User By This Email' });
    }
    
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Incorrect Password' });
    }
    
    return res.status(200).json({ message: 'Login Successful', user: existingUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

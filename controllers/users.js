const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/users');

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.SECRET_KEY, { expiresIn: '1d' });
};

const register = async (req, res) => {
    const { phoneNumber, email, password, role } = req.body;
    try {
        if (!phoneNumber || !email || !password || !role)
            throw Error("All fields must be filled!");

        const existEmail = await Users.findOne({ email });
        if (existEmail) throw Error("Email already in use");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await Users.create({
            phoneNumber,
            email,
            password: hashedPassword,
            role
        });
        await user.save();

        const token = generateToken(user._id, role);
        res.status(200).json({ message: "User registered successfully", user, token });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) throw Error("All fields must be filled");

        const user = await Users.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = generateToken(user._id, user.role);
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
};

module.exports = { register, login };

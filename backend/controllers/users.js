const Users = require("../models/users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id, role) => {
    const token = jwt.sign({ id, role }, process.env.SECRET_KEY, { expiresIn: '1d' });
    return token;
}

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
        res.status(200).json({ message: "User added successfully",user,token,id:user._id });
    } catch (error) {
        res.status(500).json({ message: "Failed to add ann user", error: error.message });
    }
};

const login = async (req, res) => {
    const { phoneNumber, email, password } = req.body;
    try {
        if (!(email && phoneNumber) || !password) throw Error("All fields must be filled");
        const exist = await Users.findOne({ email });
        if (!exist){
            return res.status(400).json({
                success: false,
                message: `Not registered yet!`,
            });
        }
        const comparing = await bcrypt.compare(password, exist.password);
        if(!comparing){
            return res.status(400).json({
                success: false,
                message: `Wrong password!`,
            });
        }
       
        const token = generateToken(exist._id, exist.role);
        res.status(200).json({ message: "login successfully", token, id:exist._id });
    } catch (error) {
        res.status(500).json({ message: `Failed to login by ${email}`, error: error.message })
    }
}

const findOne = async (req, res) => {
    const {Id} = req.params;
    try {
        if (!Id) throw Error("No id detected to continue");
        const user = await Users.findById({ _id:Id });
        if (!user) throw Error("An error occured");
        res.status(200).json({ message: "User retrieved successfully", user });
    } catch (error) {
        res.status(500).json({ message: "failed to get the user", error: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json({ message: "Users retrieved successfully", users });
    } catch (error) {
        res.status(500).json({ message: 'An error occured during selecting all users', error: error.message })
    }
}

const deleteUser = async (req, res) => {
    const { Id } = req.params;
    try {
        if(!Id)throw Error("No id passed as parameter");
        const resultat = await Users.findByIdAndDelete({ _id:Id });
        if (!resultat) throw Error("An error occured");
        const users =await Users.find({});
        res.status(200).json({ message: "One of users deleted successfully", users});
    } catch (error) {
        res.status(500).json({ message: "An error occured during deleting a user", error: error.message })
    }
}

const updateUser = async (req, res) => {
    const { phoneNumber, email, password, role } = req.body;
    const { Id } = req.params
    try {
        if (!Id) throw Error("No id sent as parameter");
        const resultat = await Users.findByIdAndUpdate({ _id:Id }, { phoneNumber, email, password, role});
        if(!resultat)throw Error("Error while updating");
        const user=await getUserById(Id);
        res.status(200).json({ message: "Updating a user successfully" ,user});
    } catch (error) {
        res.status(500).json({ message: "Failed to update a user", error: error.message })
    }
}

const getUserById = async(Id)=>{
    try {
      const user= await Users.findById({_id:Id});
      return user;
    } catch (error) {
      return error;
    }
  }

 
module.exports = {register, login, findOne, getAll, deleteUser, updateUser };
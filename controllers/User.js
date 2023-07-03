import { UserModel } from '../models/User.js';
import bcrypt from 'bcrypt';
import { sendCookie } from '../utils/features.js';
export const getAllUsers = (req, res) => { }

export const login = async (req, res) => {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email }).select("+password");
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Invalid email or password",
        })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(404).json({
            success: false,
            message: "Invalid email or password",
        })
    }

    sendCookie(user, res, `Welcome Back ${user.name}`, 200);
}
export const RegisterUser = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
        return res.status(404).json({
            success: false,
            message: "user already exist",
        })
    }
    const hashpassword = await bcrypt.hash(password, 10);
    user = await UserModel.create({ name, email, password: hashpassword });

    sendCookie(user, res, "Registered Successfully", 201);


}

export const getMyProfile = (req, res) => {

    res.status(201).json({
        success: true,
        user: req.user,
    })
}
export const logout = (req, res) => {

    res.status(200).cookie("token", "", { expires: new Date(Date.now()) }).json({
        success: true,
        message: "Successfully logout",

    })
}
import { UserModel } from '../models/User.js';
import jwt from 'jsonwebtoken';

export const isAuthenticated = async (req, res, next) => {
    try {
        const id = "myid";
        const { token } = req.cookies;
        if (!token) {
            return res.status(404).json({
                success: false,
                message: "Login First",
            })
        }
        const decodedId = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await UserModel.findById(decodedId);
        next();
    } catch (error) {
        console.log(error);
    }
}
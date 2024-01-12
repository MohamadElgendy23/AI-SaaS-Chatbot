import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    // get all users
    try 
    {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error)
    {
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
}

export const userSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {user, email, phone} = req.body;

    }
    catch (error) {
        return res.status(404).json({ message: "ERROR", cause: error.message });
    }
}
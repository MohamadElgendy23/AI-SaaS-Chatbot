import { Request, Response, NextFunction } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

// middleware to validate user data
export const validate = (validations: ValidationChain[])  => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty())
            {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty())
            {
                return next();
            }
            // data cannot be processed
            return res.status(422).json({ errors: errors.array() });
        }
    };
};


// requirements for user data
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password should be atleast 6 characters"),
];

// requirements for user data
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
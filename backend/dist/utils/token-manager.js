import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: expiresIn,
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map
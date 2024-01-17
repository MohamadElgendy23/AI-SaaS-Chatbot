import axios from "axios";

// api client for logging in user
export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", { email, password });
    if (res.status !== 200)
    {
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
};
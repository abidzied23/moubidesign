import users from "../models/users_schema.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";
export const signUp = async (req, res) => {
    try {
        const { Name, Email, Password, Phone_Number, Massage } = req.body;

        if (!(Name && Email && Password && Phone_Number && Massage)) {
            res.status(400).send("All input is required");
        }

        const olduser = await users.findOne({ Email: Email });
        if (olduser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const encryptedpassword = await bcrypt.hash(Password, 10);

        const newuser = await users.create({
            Name,
            Email: Email.tolowercase(),
            Password: encryptedpassword,
            Phone_Number,
            Massage
        });

        const token = jwt.sign(
            { user_id: user._id, Email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }

        );
        newuser.token = token;



        res.status(201).json(newuser);
    } catch (err) {
        console.log(err);
    }

}
export const login = async (req, res) => {


    try {
        console.log("arrived")

        const { email, password } = req.body;



        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await userModel.findOne({ email: email });


        if (user && (await bcrypt.compare(password, user.password))) {

            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );


            user.token = token;


            res.status(200).send(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }

};




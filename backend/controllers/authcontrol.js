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
        console.log("good")

        const encryptedpassword = await bcrypt.hash(Password, 10);

        const newuser = await users.create({
            Name,
            Email,
            Password: encryptedpassword,
            Phone_Number,
            Massage
        });

        const token = jwt.sign(
            { newuser_id: newuser._id, Email },
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

        const { Email, Password } = req.body;



        if (!(Email && Password)) {
            res.status(400).send("All input is required");
        }

        const user = await users.findOne({ Email: Email });


        if (user && (await bcrypt.compare(Password, user.Password))) {

            const token = jwt.sign(
                { user_id: user._id, Email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );


            user.token = token;


            //res.status(200).send(user);
            console.log("user verified")
        }
        res.status(400).send("Invalid Credentials");
        console.log("invalid user")
    } catch (err) {
        console.log(err);
    }

};




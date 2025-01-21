import { User } from "../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendMail from "../Middlewares/sendmail.js";

export const registerUser = async (req, res) => {

    try {
        const { name, email, password, contact } = req.body;
        //console.log(req.body);
        
        const testUser = new User(req.body);
        //console.log(testUser);
        /*
        testUser.save()
         .then((doc) => {
             console.log('User saved:', doc);
             })
        .catch((error) => {
         console.error('Error saving user:', error.message);
         });
         */


        let dbuser = await User.findOne();

        console.log(dbuser);

        //encrypt password
        let epassword = await bcrypt.hash(password,10);

        //Generate otp
        let otp = Math.floor(Math.random()*1000000);

        let user = {name, email, epassword, contact};

        const actToken = jwt.sign({user,otp},process.env.ACTIVATION_KEY,{
            expiresIn: "5m"
        });

        //send verification mail
        let subject ="Email confirmation";
        let message = `Verfy your OTP ${otp}`;

        await sendMail(email,subject,message);

        res.status(200).json({
            message: "OTP sent",
            actToken,
        })


        if(dbuser) {

            res.status(400).json({
                message: "User already exists!"
            });
        }
        else {


        }

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
}
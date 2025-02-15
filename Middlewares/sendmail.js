import {createTransport} from "nodemailer";

const sendMail = async(email, subject, text) => {

    const transport = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        
    });

    //send mail
    await transport.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject,
        text
    });
 

};



export default sendMail;
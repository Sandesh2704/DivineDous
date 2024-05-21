import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail2 = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        let emailSubject = "";

        switch (emailType) {
            case "VERIFY":
                await User.findByIdAndUpdate(userId, {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000,
                });
                emailSubject = "Verify your email";
                break;
            case "RESET":
                await User.findByIdAndUpdate(userId, {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000,
                });
                emailSubject = "Reset your password";
                break;
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: "admin@gmail.com",
            to: email,
            subject: emailSubject,
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailSubject}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`,
        };

        const mailresponse = await transporter.sendMail(mailOptions);
        return mailresponse;
    } catch (error) {
        throw new Error(error.message);
    }
};

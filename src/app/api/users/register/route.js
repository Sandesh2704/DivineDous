import { connect } from "@/dbconfig/dbconfig";
import Users from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import { sendEmail2 } from "@/helpers/mailHelper";

connect();

export async function POST(request) {
    try {
        const reqBody = request.json();
        const { username, email, password } = await reqBody;
        console.log("reqBody:", reqBody);

        const user = await Users.findOne({ email });

        if (user) {
            // return NextRequest.json({ error: 'User already exists' }, { status: 500 })
            return NextResponse.json(
                { error: "User already exists" },
                { status: 500 }
            );
        }

        const salt = await bcryptjs.genSalt(10);
        const hashpassward = await bcryptjs.hash(password, salt);

        const newUser = new Users({
            username,
            email,
            password: hashpassward,
        });

        const savedUser = await newUser.save();
        console.log("savedUser",savedUser);

        await sendEmail2({ email, emailType: "VERIFY", userId: savedUser._id });

        return NextResponse.json({
            massage: "User registered successfully in database",
            success: true,
            savedUser,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

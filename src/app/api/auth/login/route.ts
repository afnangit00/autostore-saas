import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";

// export async function POST() {
//   return NextResponse.json({
//     success: true,
//     message: "Login API Working",
//   });
// }


export async function POST(request: Request) {
        try {
                await connectDB();

                const body = await request.json();

                const { email, password } = body;

                const user = await User.findOne({ email,
                 });

                 if(!user) {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "User Not found",
                                },
                                { status: 400 }
                        );
                 }

                 const isPasswordCorrect =
  await bcrypt.compare(
    password,
    user.password
  );

if (!isPasswordCorrect) {
  return NextResponse.json(
    {
      success: false,
      message: "Invalid password",
    },
    { status: 401 }
  );
}

const token = generateToken(user._id.toString());

console.log(token)

const response = 
NextResponse.json({
  success: true,
  message: "Login successful",

  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});

response.cookies.set(
  "token",
  token,
  {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  }
);

return response;


} catch (error) {
        return NextResponse.json(
                {
                        success: false,
                        message: "Login Failed",
                },
                { status: 500 }
        );
}

}
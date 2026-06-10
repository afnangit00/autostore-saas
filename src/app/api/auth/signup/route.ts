import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(
  password,
  10
);

const existingUser = await User.findOne({ email });

if (existingUser) {
  return NextResponse.json(
    {
      success: false,
      message: "Email already exists",
    },
    { status: 400 }
  );
};

await User.create({
  name,
  email,
  password: hashedPassword,
});

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      { status:500 }
    );
  }
}
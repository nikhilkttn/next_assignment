// pages/api/blogs.js
import jwt from "jsonwebtoken";
import Blogs from "@/Model/Blogs";
import connectDB from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import Users from "@/Model/Users";
export async function POST(req: any, res: any) {
  await connectDB();

  try {
    const result = await req?.json();
    const { email } = result;
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const userBlogs = await Blogs.find({ authorEmail: email });
    if (userBlogs) {
      return NextResponse.json({ data: userBlogs });
    }
    // res.status(200).json(userBlogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

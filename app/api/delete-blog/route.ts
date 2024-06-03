// pages/api/blogs/delete.js
import jwt from "jsonwebtoken";
import Blogs from "@/Model/Blogs";
import connectDB from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  try {
    await connectDB();
    const { id, email } = await req.json();

    if (!id || !email) {
      return NextResponse.json(
        { message: "Unauthorised Request" },
        { status: 400 }
      );
    }

    const userBlogs = await Blogs.find({ authorEmail: email });
    if (!userBlogs?.length) {
      return NextResponse.json({ message: "No more blogs" }, { status: 404 });
    }

    const deletedBlog = await Blogs.findOneAndDelete({
      _id: id,
      authorEmail: email,
    });

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully", statusCode: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

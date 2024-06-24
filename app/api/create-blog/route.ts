// pages/api/blogs/create.js
import jwt from "jsonwebtoken";
import Blogs from "@/Model/Blogs";
import connectDB from "@/app/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();

  try {
    const response: any = await req.json();
    const { title, content, date, email, author } = response;

    // Find the last blog entry to get the current highest id
    const lastBlog = await Blogs.findOne().sort({ id: -1 });

    // Determine the new id for the next blog entry
    const newId = (lastBlog ? lastBlog.id : 0) + 1;

    // Check if a blog with the same title already exists for the author
    const existingBlog = await Blogs.findOne({ title, authorEmail: email });
    if (existingBlog) {
      return NextResponse.json(
        { message: "Blog with same title already exists" },
        { status: 400 }
      );
    }

    // Create a new blog if no duplicate is found
    await Blogs.create({
      title,
      date,
      content,
      author,
      authorEmail: email,
      id: newId,
    });
    return NextResponse.json(
      { message: "Blog created successfully", statusCode: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

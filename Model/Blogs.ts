// models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  authorEmail: { type: String, required: true },
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);

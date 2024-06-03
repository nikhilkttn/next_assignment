import mongoose from "mongoose";

const MONGO_URI: any = process.env.NEXT_PUBLIC_DATABASE_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log("===============db connected successfully===============");
  } catch (err: any) {
    console.error(`Error connecting to the database: ${err.message}`);
    // Optionally, you can add error recovery or retry logic here
  }
};

export default connectDB;

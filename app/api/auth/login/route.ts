import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '@/Model/Users';
import connectDB from '@/app/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req:any, res:any) {  
  await connectDB();

  const result = await req?.json();
  const { email, password } = result;

  try {
    const user = await Users.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }
    if(!user){
      return NextResponse.json({ message: 'User not found' }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, 'secretkey');
    const userResponse = {
      email:user?.email,
      token:token
    }
    return NextResponse.json({ user: userResponse,statusCode:'200' }, { status: 200 });

  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}

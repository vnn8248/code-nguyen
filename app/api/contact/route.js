import connectDB from '@/app/lib/mongodb';
import Contact from '@/app/models/contact';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];

      for (let e in error.errors) {
        errorList.push(error.errors[e]);
      }

      console.log(errorList);

      return NextResponse.json({ msg: errorList, success: false });
    } else {
      console.log(error);
      return NextResponse.json({
        msg: ['Unable to send message right now'],
        success: false,
      });
    }
  }
}

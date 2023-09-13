import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { connectToDatabase } from "@/helpers/server-helpers";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const requestBody = await req.json();
    console.log(requestBody);
    const { name, email, password } = requestBody;
    if (!name || !email || !password)
      return NextResponse.json({ message: "invalid data" }, { status: 422 });
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectToDatabase();

    const user = await prisma.user.create({
      data: { name, email, hashedPassword },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

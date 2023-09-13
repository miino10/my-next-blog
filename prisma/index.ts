//@ts-nocheck
import prismaClient from "@/app/libs/prismadb";
import { PrismaClient } from "prisma/prisma-client";

let prisma: PrismaClient;
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new prismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

import prisma from "../../prisma";

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("database is connected successfully");
  } catch (error) {
    console.log("database is not connected", error);
  }
};

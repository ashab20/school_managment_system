import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface StudentData {
  // Define student data interface
}

export default async function studentSeed() {
  // Implement student seed logic
}

export async function runStudentSeed() {
  try {
    await studentSeed();
    console.log("Student seed completed.");
  } catch (e) {
    console.error("Error in student seed:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

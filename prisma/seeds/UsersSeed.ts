import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserData {
  email: string;
  username: string;
}

export default async function userSeed() {
  const fakeEmail = `user ${Math.random()}@gmail.com`;
  const fakeUsername = `username${Math.random()}`;
  const user = await prisma.user.upsert({
    where: { email: fakeEmail },
    update: {},
    create: {
      email: fakeEmail,
      username: fakeUsername,
      name: `Name  ${Math.random()}`,
      password: "12345678",
    },
  });
}

export async function runUserSeed() {
  try {
    await userSeed();
    console.log("User seed completed.");
  } catch (e) {
    console.error("Error in user seed:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

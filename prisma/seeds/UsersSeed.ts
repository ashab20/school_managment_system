import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userSeeder = async (numUsers:any) => {
  for (let i = 0; i < numUsers; i++) {
    const fakeEmail = `user${i}@gmail.com`;
    const fakeUsername = `username${i}`;
    const user = await prisma.user.upsert({
      where: { email: fakeEmail },
      update: {},
      create: {
        email: fakeEmail,
        username: fakeUsername,
        name: `Name ${i}`,
        password: "12345678",
      },
    });
    console.log(`Inserted user: ${user.email}`);
  }
};

export default userSeeder;

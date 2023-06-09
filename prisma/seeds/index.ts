import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import userSeeder from "./UsersSeed";
import studentSeeder from "./StudentSeed";

const runSeeder = async (command:string, count:number) => {
  if (command === "user") {
    await userSeeder(count);
  } else if (command === "student") {
    await studentSeeder(count);
  } else {
    // Execute all seeds
    await userSeeder(count);
    await studentSeeder(count);
  }
};

const [command, countArg] = process.argv.slice(2);

const count = parseInt(countArg);

if (isNaN(count)) {
  console.error("Invalid count. Please provide a valid number.");
  process.exit(1);
}

runSeeder(command, count)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const studentSeeder = async (numStudents:any) => {
  for (let i = 0; i < numStudents; i++) {
    // const student = await prisma.student.create({
    //   data: {
    //     scholarshipId:
    //   },
    // });
    // console.log(`Inserted student: ${student.name}`);
  }
};

export default studentSeeder;

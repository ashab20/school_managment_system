import { runUserSeed } from "./UsersSeed";
// import { runStudentSeed } from "./StudentSeed";

async function seeders() {
  try {
    await runUserSeed();
    // await runStudentSeed();
    console.log("All seeders completed.");
  } catch (e) {
    console.error("Error in seeders:", e);
    process.exit(1);
  }
}

seeders();

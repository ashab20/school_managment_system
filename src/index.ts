/*
? Title: 'PostgreSql Project' 
* Description: 'mern stack ecommerce poroject'
! Author: 'Ashab Uddin'
* contact: ''
* Date: '2023-03-23'
*/

import { config } from "dotenv";
import routes from "./routes";
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

console.log("ok");

config();

// unhandle cought error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log(`Shutting down the server due to the uncounght server error`);
  prisma.$disconnect();
  process.exit(1);
  // like undifine fundtion call
});

// Module scufholding
const port = process.env.APP_PORT;

console.log(port);
// Listening to servr
const server = app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});

// unhadle Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log(
    `Server shutting down the server due to unhandle promise rejaction`
  );
  server.close(() => {
      prisma.$disconnect();
    process.exit(1);
  });
});

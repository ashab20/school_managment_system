
/*
? Title: 'PostgreSql Project' 
* Description: 'mern stack ecommerce poroject'
! Author: 'Ashab Uddin'
* contact: ''
* Date: '2023-03-23'
*/


import { config } from "dotenv";
import routes from "./routes";
import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', routes);



config();

// unhandle cought error
process.on('uncaughtException', (err) =>{
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to the uncounght server error`);
    process.exit(1);
    prisma.$disconnect();
    // like undifine fundtion call
})



// Module scufholding
const port = process.env.APP_PORT;


// Listening to servr
const server = app.listen(port,()=>{
    console.log(`Server listening to ${port}`)
})


// unhadle Promise rejection 
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    console.log(`Server shutting down the server due to unhandle promise rejaction`);
    server.close(()=>{
        process.exit(1);
    });
    prisma.$disconnect();
})
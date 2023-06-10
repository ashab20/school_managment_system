import ErrorHandler from "@utils/errorHandler";
import { Request, Response, NextFunction } from "express";
import asyncMiddleware from "@middleware/asyncMiddleare";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all users
export const indexTodo = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await prisma.user.findMany();
    if (!data) return next(new ErrorHandler("No data founds!", 404));
    res.status(200).json({ data });
  }
);

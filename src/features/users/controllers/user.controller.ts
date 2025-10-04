import type { Request, Response, NextFunction } from 'express';
import prisma from '../../../globals/prisma.js';
import UserService from '../services/user.service.js';
import { StatusCodes } from 'http-status-codes';
class UserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await UserService.getAll();
    res.status(StatusCodes.OK).json({ message: 'Get all users', data: users });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const user = await UserService.create(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ message: 'User created', data: user });
  }
}

export default new UserController();

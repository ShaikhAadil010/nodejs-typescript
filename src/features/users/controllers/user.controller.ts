import type { Request, Response, NextFunction } from 'express';

class UserController {
  getAll(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: 'Get all users', data: [] });
  }
}

export default new UserController();

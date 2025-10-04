import type { NextFunction, Request, Response } from 'express';

export default function asyncWrapper(Callback: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    Callback(req, res, next).catch(next);
  };
}

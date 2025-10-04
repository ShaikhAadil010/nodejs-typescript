import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import { appRoutes } from './globals/routes/appRoutes.js';
import { MiddlewareHandler } from './globals/middlewares/middleware.js';
import { error } from 'console';
import { CustomError, NotFoundException } from './globals/cores/error.core.js';

export default class Server {
  app: Application;
  constructor() {
    this.app = express();
  }

  public start() {
    this.middlewares();
    this.routes();
    this.setupGlobalErrors();
    this.listenServer();
  }

  private middlewares() {
    MiddlewareHandler(this.app);
  }

  //Handling Global Application Routes
  private routes() {
    appRoutes(this.app);
  }

  //Handling Global Errors Middleware
  private setupGlobalErrors() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      next(
        new NotFoundException(
          `Can't find ${req.originalUrl} on this server! 🚧`,
        ),
      );
    });

    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof CustomError) {
          res.status(error.statusCode).json({
            message: error.message,
          });
          return;
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: error.message || 'Something went wrong! 🚧',
        });
        return;
      },
    );
  }

  private listenServer() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} 🚀`);
    });
  }
}

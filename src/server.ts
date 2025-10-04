import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import { appRoutes } from './globals/routes/appRoutes.js';
import { MiddlewareHandler } from './globals/middlewares/middleware.js';
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
  private routes() {
    appRoutes(this.app);
  }
  private setupGlobalErrors() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `Can't find ${req.originalUrl} on this server! 🚧` });
    });
  }

  private listenServer() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} 🚀`);
    });
  }
}

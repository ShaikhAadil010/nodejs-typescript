import type { Application } from 'express';
import express from 'express';
import 'dotenv/config';
import { appRoutes } from './globals/routes/appRoutes.js';

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

  private middlewares() {}

  private routes() {
    appRoutes(this.app);
  }
  private setupGlobalErrors() {}

  private listenServer() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} 🚀`);
    });
  }
}

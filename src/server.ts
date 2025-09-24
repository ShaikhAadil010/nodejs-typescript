import type { Application } from 'express';
import express from 'express';
import 'dotenv/config';

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
  private routes() {}
  private setupGlobalErrors() {}

  private listenServer() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} 🚀`);
    });
  }
}

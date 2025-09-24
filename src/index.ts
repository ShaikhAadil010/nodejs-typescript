import Server from './server.js';

export class JobApplication {
  run() {
    const server = new Server();
    server.start();
  }
}

const job = new JobApplication();
job.run();

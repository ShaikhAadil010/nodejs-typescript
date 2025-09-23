import  Server  from "./server.js";

export class JobApplication{
    run(){
        const server=new Server()
        server.listenServer();
    }
}

const job=new JobApplication();
job.run();
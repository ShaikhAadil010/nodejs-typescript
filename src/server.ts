import type { Application } from "express";
import express from "express";

export default class Server{
 app: Application;
 constructor(){
    this.app=express();
 }

 listenServer(){
    const PORT=process.env.PORT || 3000;
    this.app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT} 🚀`);
    })
 }
}


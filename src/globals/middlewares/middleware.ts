import type { Application } from 'express';
import express from 'express';
import cors from 'cors';

export function MiddlewareHandler(app: Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
}

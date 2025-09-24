import type { Application } from 'express';
import userRoute from '../../features/users/routes/user.routes.js';

export function appRoutes(app: Application) {
  // Define your application routes here
  app.use('/api/v1/users', userRoute);
}

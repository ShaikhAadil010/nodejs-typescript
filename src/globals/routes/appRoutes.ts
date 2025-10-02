import type { Application } from 'express';
import userRoute from '../../features/users/routes/user.routes.js';
import type { Request, Response } from 'express';

export function appRoutes(app: Application) {
  // Define your application routes here
  app.use('/api/v1/users', userRoute);

  app.get('/api/v1/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });
}

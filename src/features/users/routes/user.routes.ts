import express from 'express';
import userController from '../controllers/user.controller.js';
import asyncWrapper from '../../../globals/cores/asyncwrapper.core.js';
import { verifySchema } from '../../../globals/middlewares/verifySchema.middleware.js';
import createUserSchema from '../schemas/createuser.schema.js';

const userRoute = express.Router();

userRoute.get('/', asyncWrapper(userController.getAll));
userRoute.post(
  '/',
  verifySchema(createUserSchema),
  asyncWrapper(userController.create),
);

export default userRoute;

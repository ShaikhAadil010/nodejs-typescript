import express from 'express';
import userController from '../controllers/user.controller.js';
import asyncWrapper from '../../../globals/cores/asyncwrapper.core.js';

const userRoute = express.Router();

userRoute.get('/', asyncWrapper(userController.getAll));
userRoute.post('/', asyncWrapper(userController.create));

export default userRoute;

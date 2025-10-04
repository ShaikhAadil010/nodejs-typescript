import prisma from '../../../globals/prisma.js';
import createUserSchema from '../schemas/createuser.schema.js';
import { StatusCodes } from 'http-status-codes';

class UserService {
  async getAll() {
    const users = await prisma.user.findMany();
    return users;
  }
  async create(requestBody: any) {
    const { name, email, password, role } = requestBody;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        role,
        password,
      },
    });

    return user;
  }
}

export default new UserService();

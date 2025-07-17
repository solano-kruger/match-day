import prisma from '../../prismaClient';
import User from '../models/User';

const getAllUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users.map((u: { id: number; name: string; email: string; password: string; }) => new User(u.id, u.name, u.email, u.password));
};

const getUserById = async (id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (user) {
    return new User(user.id, user.name, user.email, user.password);
  }
  return null;
};

const createUser = async (name: string, email: string, password: string): Promise<User> => {
  const user = await prisma.user.create({
    data: { name, email, password },
  });
  return new User(user.id, user.name, user.email, user.password);
};

export { getAllUsers, getUserById, createUser };

import User from "../../../src/domain/models/User";
import { getAllUsers, getUserById, createUser } from "../../../src/domain/service/UserService";
import prisma from "../../../src/prismaClient";

describe('UserService', () => {
    const mockFindMany = jest.fn();
    const mockFindUnique = jest.fn();
    const mockCreate = jest.fn();
  
    prisma.user.findMany = mockFindMany;
    prisma.user.findUnique = mockFindUnique;
    prisma.user.create = mockCreate;
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    describe('getAllUsers', () => {
      it('should return all users', async () => {
        const mockUsers = [
          { id: 1, name: 'User 1', email: 'user1@example.com', password: 'password1' },
          { id: 2, name: 'User 2', email: 'user2@example.com', password: 'password2' },
        ];
        mockFindMany.mockResolvedValue(mockUsers);
  
        const result = await getAllUsers();
  
        expect(prisma.user.findMany).toHaveBeenCalled();
        expect(result).toHaveLength(2);
        expect(result[0]).toEqual(new User(1, 'User 1', 'user1@example.com', 'password1'));
        expect(result[1]).toEqual(new User(2, 'User 2', 'user2@example.com', 'password2'));
      });
    });
  
    describe('getUserById', () => {
      it('should return a user by ID', async () => {
        const mockUser = { id: 1, name: 'User 1', email: 'user1@example.com', password: 'password1' };
        mockFindUnique.mockResolvedValue(mockUser);
  
        const result = await getUserById(1);
  
        expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(new User(1, 'User 1', 'user1@example.com', 'password1'));
      });
  
      it('should return null if user is not found', async () => {
        mockFindUnique.mockResolvedValue(null);
  
        const result = await getUserById(1);
  
        expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toBeNull();
      });
    });
  
    describe('createUser', () => {
      it('should create a new user', async () => {
        const mockUser = { id: 1, name: 'User 1', email: 'user1@example.com', password: 'password1' };
        mockCreate.mockResolvedValue(mockUser);
  
        const result = await createUser('User 1', 'user1@example.com', 'password1');
  
        expect(prisma.user.create).toHaveBeenCalledWith({
          data: { name: 'User 1', email: 'user1@example.com', password: 'password1' },
        });
        expect(result).toEqual(new User(1, 'User 1', 'user1@example.com', 'password1'));
      });
    });
  });
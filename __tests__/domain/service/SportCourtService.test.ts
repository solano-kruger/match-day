import Sport_Court from "../../../src/domain/models/Sport_Court";
import { getAllSportCourts, getSportCourtById, createSportCourt, getSportCourts } from "../../../src/domain/service/SportCourtService";
import prisma from "../../../src/prismaClient";

jest.mock('../../../src/prismaClient', () => ({
    sport_Court: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      count: jest.fn(),
    },
    $transaction: jest.fn(),
  }));
  
  describe('SportCourtService', () => {
    const mockFindMany = jest.fn();
    const mockFindUnique = jest.fn();
    const mockCreate = jest.fn();
    const mockCount = jest.fn();
    const mockTransaction = jest.fn();
  
    prisma.sport_Court.findMany = mockFindMany;
    prisma.sport_Court.findUnique = mockFindUnique;
    prisma.sport_Court.create = mockCreate;
    prisma.sport_Court.count = mockCount;
    prisma.$transaction = mockTransaction;
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    describe('getAllSportCourts', () => {
      it('should return all sport courts', async () => {
        const mockSportCourts = [
          {
            id: 1,
            name: 'Court 1',
            reservated: false,
            description: null,
            size: 'Large',
            location: 'Location 1',
            start_datetime: new Date(),
            end_datetime: new Date(),
            price: { toNumber: () => 100 },
          },
        ];
        mockFindMany.mockResolvedValue(mockSportCourts);
  
        const result = await getAllSportCourts();
  
        expect(prisma.sport_Court.findMany).toHaveBeenCalled();
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual(new Sport_Court(1, 'Court 1', false, null, 'Large', 'Location 1', new Date(), new Date(), 100));
      });
  
      it('should handle errors', async () => {
        mockFindMany.mockRejectedValue(new Error('Test error'));
  
        await expect(getAllSportCourts()).rejects.toThrow('Test error');
      });
    });
  
    describe('getSportCourtById', () => {
      it('should return the sport court by ID', async () => {
        const mockSportCourt = {
          id: 1,
          name: 'Court 1',
          reservated: false,
          description: null,
          size: 'Large',
          location: 'Location 1',
          start_datetime: new Date(),
          end_datetime: new Date(),
          price: { toNumber: () => 100 },
        };
        mockFindUnique.mockResolvedValue(mockSportCourt);
  
        const result = await getSportCourtById(1);
  
        expect(prisma.sport_Court.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(new Sport_Court(1, 'Court 1', false, null, 'Large', 'Location 1', new Date(), new Date(), 100));
      });
  
      it('should return null if sport court not found', async () => {
        mockFindUnique.mockResolvedValue(null);
  
        const result = await getSportCourtById(1);
  
        expect(prisma.sport_Court.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toBeNull();
      });
    });
  
    describe('createSportCourt', () => {
      it('should create a new sport court', async () => {
        const mockSportCourt = {
          id: 1,
          name: 'Court 1',
          reservated: false,
          description: null,
          size: 'Large',
          location: 'Location 1',
          start_datetime: new Date(),
          end_datetime: new Date(),
          price: { toNumber: () => 100 },
        };
        mockCreate.mockResolvedValue(mockSportCourt);
  
        const result = await createSportCourt(
          'Court 1',
          false,
          null,
          'Large',
          'Location 1',
          new Date(),
          new Date(),
          100
        );
  
        expect(prisma.sport_Court.create).toHaveBeenCalledWith({
          data: {
            name: 'Court 1',
            reservated: false,
            description: null,
            size: 'Large',
            location: 'Location 1',
            start_datetime: expect.any(Date),
            end_datetime: expect.any(Date),
            price: '100',
          },
        });
        expect(result).toEqual(new Sport_Court(1, 'Court 1', false, null, 'Large', 'Location 1', new Date(), new Date(), 100));
      });
    });
  
    describe('getSportCourts', () => {
      it('should return filtered and paginated sport courts', async () => {
        const mockSportCourts = [
          {
            id: 1,
            name: 'Court 1',
            reservated: false,
            description: null,
            size: 'Large',
            location: 'Location 1',
            start_datetime: new Date(),
            end_datetime: new Date(),
            price: { toNumber: () => 100 },
          },
        ];
        mockTransaction.mockResolvedValue([mockSportCourts, 1]);
  
        const query = { page: '1', limit: '10' };
        const result = await getSportCourts(query);
  
        expect(prisma.$transaction).toHaveBeenCalled();
        expect(result).toHaveProperty('data');
        expect(result.data).toHaveLength(1);
        expect(result.total).toBe(1);
        expect(result.totalPages).toBe(1);
        expect(result.currentPage).toBe(1);
      });
  
      it('should handle errors', async () => {
        mockTransaction.mockRejectedValue(new Error('Test error'));
  
        await expect(getSportCourts({ page: '1', limit: '10' })).rejects.toThrow('Test error');
      });
    });
  });
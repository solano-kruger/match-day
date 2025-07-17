import UserReservation from "../../../src/domain/models/User_Reservation";
import { getAllUserReservations } from "../../../src/domain/service/UserReservationService";
import prisma from "../../../src/prismaClient";

describe('UserReservationService', () => {
    const mockFindMany = jest.fn();
  
    prisma.user_Reservation.findMany = mockFindMany;
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    describe('getAllUserReservations', () => {
      it('should return all user reservations', async () => {
        const mockUserReservations = [
          { id: 1, user_id: 1, reservation_id: 1 },
          { id: 2, user_id: 2, reservation_id: 2 },
        ];
        mockFindMany.mockResolvedValue(mockUserReservations);
  
        const result = await getAllUserReservations();
  
        expect(prisma.user_Reservation.findMany).toHaveBeenCalled();
        expect(result).toHaveLength(2);
        expect(result[0]).toEqual(new UserReservation(1, 1, 1));
        expect(result[1]).toEqual(new UserReservation(2, 2, 2));
      });
  
      it('should handle errors', async () => {
        mockFindMany.mockRejectedValue(new Error('Test error'));
  
        await expect(getAllUserReservations()).rejects.toThrow('Test error');
      });
    });
  });
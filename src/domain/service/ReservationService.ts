import ReservationRepository from '../repository/ReservationRepository';
import UserReservationRepository from '../repository/UserReservationRepository';

class ReservationService {
  async createReservation(sportCourtId: number, userId: number, status: string): Promise<any> {
    const reservation = await ReservationRepository.createReservation(sportCourtId, status);
    await UserReservationRepository.createUserReservation(userId, reservation.getId());
    return reservation;
  }

  async updateReservationStatus(reservationId: number, newStatus: string): Promise<boolean> {
    const updated = await ReservationRepository.updateReservationStatus(reservationId, newStatus);
    return updated;
  }

  async getUserReservations(userId: number): Promise<any> {
    return await ReservationRepository.getUserReservations(userId);
  }
}

export default new ReservationService();
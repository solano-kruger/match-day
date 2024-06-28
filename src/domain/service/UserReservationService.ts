import prisma from '../../prismaClient';
import UserReservation from '../models/User_Reservation';

const getAllUserReservations = async () => {
  try {
    const userReservations = await prisma.user_Reservation.findMany();
    return userReservations.map(
      ur => new UserReservation(ur.id, ur.user_id, ur.reservation_id)
    );
  } catch (error) {
    console.error('Error fetching user reservations:', error);
    throw error;
  }
};

export { getAllUserReservations };

import express, { Request, Response } from 'express';
import { getAllUserReservations } from '../../domain/service/UserReservationService';

const router = express.Router();
// Rota para obter todas as reservas de usuário
router.get('/user-reservations', async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['UserReservation']
    #swagger.summary = 'Get all user reservations'
    #swagger.description = 'This endpoint will retrieve all user reservations'
  */
  try {
    const userReservations = await getAllUserReservations();
    res.json(userReservations);
  } catch (error) {
    console.error('Error fetching user reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

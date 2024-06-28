import express, { json } from 'express';
import ReservationService from '../../domain/service/ReservationService';

const router = express.Router();

router.post('/reservation', async (req, res) => {
  const { sportCourtId, userId, status } = req.body as {
    sportCourtId: number;
    userId: number;
    status: string;
};  /*
    #swagger.tags = ['Reservation']
    #swagger.summary = 'Create reservation'
    #swagger.description = 'This endpoint will create user reservation'
  */
  try {
    const reservation = await ReservationService.createReservation(sportCourtId, userId, status);
    res.status(201).json(reservation);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error in /reserve route:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

router.get('/reservation/:userId', async (req, res) => {
  const { userId } = req.params as unknown as {
    userId: number;
  };
  /*
    #swagger.tags = ['Reservation']
    #swagger.summary = 'Get reservation by userId'
    #swagger.description = 'This endpoint will retrieve a detailed user reservations'
  */
  try {
    const reservations = await ReservationService.getUserReservations(Number(userId));
    res.status(200).json(reservations);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error in /reservation/:userId route:', error.message);
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

export default router;

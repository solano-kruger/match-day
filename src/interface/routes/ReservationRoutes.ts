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

router.patch('/reservation/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  /*
    #swagger.tags = ['Reservation']
    #swagger.summary = 'Update reservation byid'
    #swagger.description = 'This endpoint will update the reservation status'
  */
  try {

    const updated = await ReservationService.updateReservationStatus(parseInt(id), status);
    if (updated) {
      res.status(200).json({ message: 'Reservation status updated successfully.' });
    } else {
      res.status(404).json({ message: 'Reservation not found or no update needed.' });
    }
  } catch (error) {
    console.error('Error in PATCH /reservation/:id/status:', error);
    res.status(500).json({ error: 'Failed to update reservation status.' });
  }
});

export default router;

import express from 'express';
import { getAllSportCourts, getSportCourtById, createSportCourt } from '../../domain/service/SportCourtService';

const router = express.Router();

router.get('/sportCourt/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sportCourt = await getSportCourtById(Number(id));
    /*
        #swagger.tags = ['Court']
        #swagger.summary = 'List court by id'
        #swagger.description = 'This endpoint will list the courts by id'
    */
    if (sportCourt) {
      res.json(sportCourt);
    } else {
      res.status(404).json({ error: 'Quadra não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post('/sportCourt', async (req, res) => {
  const { name, reservated, description, size, location, start_datetime, end_datetime, price } = req.body;
  try {
    
/*
    #swagger.tags = ['Court']
    #swagger.summary = 'Create a court'
    #swagger.description = 'Endpoint to create a court'
    #swagger.parameters['CourtPayload'] = {
      in: 'body',
      description: 'Payload',
      required: true,
      schema: {
          name: 'Nome da Quadra',
          reservated: true,
          description: 'Quadra de futebol',
          size: '5',
          location: 'Ijui',
          start_datetime: '2024-06-12T12:00:00Z',
          end_datetime: '2024-06-12T14:00:00Z',
          price: 100.00
      }
    }
*/
    const sportCourt = await createSportCourt(name, reservated, description, size, location, new Date(start_datetime), new Date(end_datetime), price);
    res.status(201).json(sportCourt);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get('/sportCourt', async (req, res) => {
  try {
    const sportCourts = await getAllSportCourts();
     /*
        #swagger.tags = ['Court']
        #swagger.summary = 'List all courts'
        #swagger.description = 'This endpoint will list all the courts'
    */
    res.status(200).json(sportCourts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;

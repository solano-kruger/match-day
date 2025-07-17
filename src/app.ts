// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './interface/routes/UserRoutes';
import sportCourtRoutes from './interface/routes/SportCourtRoutes';
import reservationRoutes from './interface/routes/ReservationRoutes';
import userReservationRoutes from './interface/routes/UserReservationRoutes';


const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', sportCourtRoutes);
app.use('/api', reservationRoutes);
app.use('/api', userReservationRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

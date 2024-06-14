// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './interface/routes/UserRoutes';
import sportCourtRoutes from './interface/routes/SportCourtRoutes';


const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', sportCourtRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/CustomerRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/api', customerRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

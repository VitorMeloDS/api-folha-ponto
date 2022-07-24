import express from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config';
import { apiRouter } from './router/routerController';


const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// * Routes
app.use(apiRouter)

// Porta do servidor
const PORT = process.env.PORT || 4000;

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

// inicialização da API
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
});
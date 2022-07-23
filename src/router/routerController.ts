import express, { Request, Response } from 'express';
import 'dotenv/config';
import FolhaPontoController from '../http/controller/folhaPontoController';

// Porta do servidor
const PORT = process.env.PORT || 4000;

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

// App Express
const app = express();

// Endpoint raiz
app.get('/folha-ponto', (req: Request, res: Response) => {
  const routerPonto = new FolhaPontoController();
  routerPonto.consultaSemana(req, res);
});

// Resposta padrão para quaisquer outras requisições:
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Essa Rota não existe por favor verifique!'})
});

// Inicia o sevidor
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
});
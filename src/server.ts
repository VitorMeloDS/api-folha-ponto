import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { routerControl } from './router/routerControl';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { server } from './config/app';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerDocument = require('../swagger.json');

const app: express.Application = express();

// * Swagger da API
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// Padrões de retorno
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// * Libera acesso para outras aplicações
app.use(cors());

// * Routes
app.use('/api', routerControl);

// Resposta padrão para quaisquer outras requisições:
app.use((req: Request, res: Response) => {
  res.status(404).send('Essa Rota não existe por favor verifique se está correta!');
});

// * Inicialização da API
app.listen(server.port, () => {
  console.log(`Servidor rodando com sucesso ${server.host}:${server.port} 🚀`);
});

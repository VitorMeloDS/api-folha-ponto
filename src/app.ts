import express from 'express';
import bodyParser from 'body-parser'
import 'dotenv/config';
import { apiRouter } from './router/routerController';
import cors from 'cors'

class App {
  private app: express.Application = express();
  // private app = express();
  private port = process.env.PORT;
  private hostname = process.env.HOSTNAME;

  constructor() {
    this.middlewares();
    this.routes();
  }

  // * Routes
  private routes () {
    this.app.use(apiRouter)
  }
  
  // * Libera acesso para outras aplicações 
  private middlewares () {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }
  
  // * Inicialização da API
  public server () {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando com sucesso ${this.hostname}:${this.port}`);
    });
  }

}

export default new App();

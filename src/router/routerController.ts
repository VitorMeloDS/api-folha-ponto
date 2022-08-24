import { Router, Request, Response } from 'express'
import { FolhaPontoController } from '../http/controller/folhaPontoController'
import { LoginControler } from '../http/controller/loginController'

const router = Router()

// Router folha de ponto
router.get('/login', (req: Request, res: Response) => {
  const consulta = new LoginControler()
  consulta.authentication(req, res)
})

// Router escreve dados
router.post('/salvar-dados', (req: Request, res: Response) => {
  const salvar = new FolhaPontoController()
  salvar.salvarSemana(req, res)
})

// Resposta padrão para quaisquer outras requisições:
router.use((req: Request, res: Response) => {
  res.status(404).send('Essa Rota não existe por favor verifique se está correta!')
})

export const apiRouter: Router = router

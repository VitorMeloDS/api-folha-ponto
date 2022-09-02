import { Router, Request, Response } from 'express'
import { login } from './routerLogin'
import { salvarSemana } from './routerSalvaSemana'

const router = Router()

// Router folha de ponto
router.use('/login', login)

// Router escreve dados
router.use('/salvar-semana', salvarSemana)

// Resposta padrão para quaisquer outras requisições:
router.use((req: Request, res: Response) => {
  res.status(404).send('Essa Rota não existe por favor verifique se está correta!')
})

export const apiRouter: Router = router

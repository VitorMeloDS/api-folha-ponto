import { Router, Request, Response } from 'express'
import { FolhaPontoController } from '../http/controller/folhaPontoController'

const routerSalvaSemana = Router()

routerSalvaSemana.post('', (req: Request, res: Response) => {
  const salvar = new FolhaPontoController()
  salvar.salvarSemana(req, res)
})

export const salvarSemana: Router = routerSalvaSemana

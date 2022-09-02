import { Router, Request, Response } from 'express'
import { LoginControler } from '../http/controller/loginController'

const routerLogin = Router()

routerLogin.get('', (req: Request, res: Response) => {
  const consulta = new LoginControler()
  consulta.authentication(req, res)
})

export const login: Router = routerLogin

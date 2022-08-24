import { Request, Response } from 'express'
import connection from '../../config/db'
import { Usuraio } from '../interface/usuario'

export class LoginControler {
  public async authentication (req: Request, res: Response) {
    const conn = connection
    let usuario: Usuraio

    const basicLogin = atob(req.headers.authorization?.replace('Basic', '').trim() ?? '').split(':')

    // eslint-disable-next-line prefer-const
    usuario = await conn
      .table('TB_USUARIO')
      .select('*')
      .where({
        login: basicLogin[0],
        senha: basicLogin[1]
      })
      .first()

    res.status(200).send(usuario)
  }
}

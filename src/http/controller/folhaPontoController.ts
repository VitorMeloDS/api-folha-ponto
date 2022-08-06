import { Request, Response } from 'express'
import connection from '../../config/db'
import { Usuraio } from '../interface/usuario'

class FolhaPontoController {
  public async consultaSemana (req: Request, res: Response) {
    const conn = connection
    let usuario: Usuraio

    // eslint-disable-next-line prefer-const
    usuario = await conn
      .table('TB_USUARIO')
      .select('*')
      .first()

    res.status(200).send(usuario)
  }

  public async salvarSemana (req: Request, res: Response) {

  }
}

export default FolhaPontoController

import { Request, Response } from 'express'
import connection from '../../config/db'
import { MesUsuario } from '../interface/mesUsuario'
import { Usuraio } from '../interface/usuario'

class FolhaPontoController {
  public async consultaSemana (req: Request, res: Response) {
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

  public async salvarSemana (req: Request, res: Response) {
    const conn = connection
    const mesUsuario: MesUsuario = req.body

    await conn
      .table('TB_MES_USUARIO')
      .insert({
        ID_MES_USUARIO: mesUsuario.id_mes_usuario,
        ID_USUARIO: mesUsuario.id_usuario,
        DIA: mesUsuario.dia,
        HORAS_TRABALHADAS: mesUsuario.horas_trabalhadas
      })
  }
}

export default FolhaPontoController

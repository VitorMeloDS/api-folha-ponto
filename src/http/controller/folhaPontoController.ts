import { Request, Response } from 'express'
import connection from '../../config/db'
import { MesUsuario } from '../interface/mesUsuario'

export class FolhaPontoController {
  public async consultaSemana (req: Request, res: Response) {

  }

  public async salvarSemana (req: Request, res: Response) {
    const conn = connection
    const mesUsuario: MesUsuario = req.body
    let diaSalvo: any
    let erro: any

    const resgataUltimoMes = async () => {
      // eslint-disable-next-line prefer-const
      diaSalvo = await conn
        .table('TB_MES_USUARIO')
        .select('*')
        .where({
          ID_MES_USUARIO: mesUsuario.id_mes_usuario,
          ID_USUARIO: mesUsuario.id_usuario
        })
        .first()
    }

    await conn
      .table('TB_MES_USUARIO')
      .select('*')
      .where({
        ID_MES_USUARIO: mesUsuario.id_mes_usuario,
        ID_USUARIO: mesUsuario.id_usuario
      })
      .first()
      .then(async (data) => {
        if (!data) {
          await conn
            .table('TB_MES_USUARIO')
            .insert({
              ID_MES_USUARIO: mesUsuario.id_mes_usuario,
              ID_USUARIO: mesUsuario.id_usuario,
              DIA: mesUsuario.dia,
              HORAS_TRABALHADAS: mesUsuario.horas_trabalhadas
            })
          await resgataUltimoMes()
        }
      })
      .catch((e) => {
        erro = e
      })

    return erro ? res.status(500).send(erro) : res.status(200).send(diaSalvo)
  }
}

import { Request, Response } from "express";
import { Horario } from "../interface/horario";


class FolhaPontoController {

  public async consultaSemana(req: Request, res: Response) {
    let semana = [
      {
        id: 1,
        dia: 'Segunda-feira',
        data: '23/07/2022',
        horaInicio: '08:00',
        horaAlmoco: '12:05',
        horaVolta: '13:00',
        horaSaida: '18:00'
      },
      {
        id: 1,
        dia: 'Segunda-feira',
        data: '23/07/2022',
        horaInicio: '08:00',
        horaAlmoco: '12:05',
        horaVolta: '13:00',
        horaSaida: '18:00'
      }
    ];

    return res.send(semana).status(200);
  }
}

export default FolhaPontoController;
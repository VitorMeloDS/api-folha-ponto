import { Request, Response } from "express";
import { Horario } from "../interface/horario";
import fs from 'fs';
const semana: Horario[] = require('../../../semana.json');

class FolhaPontoController {

  public async consultaSemana(req: Request, res: Response) {
    try{
      return res.send(semana).status(200);
    }catch{
      return res.send('Erro arquivo não encontrado.').status(404)
    }
    
  }

  public async salvarSemana(req: Request, res: Response) {
    semana.push(req.body)

    fs.writeFile("semana.json", JSON.stringify(semana), err => {
      // Checking for errors
      if (err) throw err; 

    });

    return res.send(semana).status(200);
  }

}

export default FolhaPontoController;
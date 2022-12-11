import { Router, Request, Response } from 'express';
import { login } from './routerLogin';
import { salvarSemana } from './routerSalvaSemana';

const router = Router();

// Router folha de ponto
router.use('/login', login);

// Router escreve dados
router.use('/salvar-semana', salvarSemana);

export const routerControl: Router = router;

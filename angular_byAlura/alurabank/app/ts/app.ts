import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
//JQuery!
$('.form').submit(controller.adiciona.bind(controller));
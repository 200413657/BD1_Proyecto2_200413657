"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preguntaController_1 = require("../controller/preguntaController");
class PaisRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', preguntaController_1.preguntaController.lista);
        this.router.get('/:id', preguntaController_1.preguntaController.obtieneUno);
        this.router.post('/', preguntaController_1.preguntaController.create);
        this.router.put('/:id', preguntaController_1.preguntaController.update);
        this.router.delete('/:id', preguntaController_1.preguntaController.delete);
    }
}
const paisRouter = new PaisRouter();
exports.default = paisRouter.router;

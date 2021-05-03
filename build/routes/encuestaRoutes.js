"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestaController_1 = require("../controller/encuestaController");
class EncuestaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', encuestaController_1.encuestaController.data);
        this.router.get('/:id', encuestaController_1.encuestaController.obtieneUno);
    }
}
const encuestaRouter = new EncuestaRouter();
exports.default = encuestaRouter.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisController_1 = require("../controller/paisController");
class PaisRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', paisController_1.paisController.data);
        this.router.get('/:id', paisController_1.paisController.obtieneUno);
        this.router.post('/', paisController_1.paisController.create);
        this.router.put('/:id', paisController_1.paisController.update);
        this.router.delete('/:id', paisController_1.paisController.delete);
    }
}
const paisRouter = new PaisRouter();
exports.default = paisRouter.router;

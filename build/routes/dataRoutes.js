"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = require("../controller/dataController");
class DataRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', dataController_1.dataController.listar);
        // this.router.post('/');
    }
}
const dataRoutes = new DataRouter();
exports.default = dataRoutes.router;

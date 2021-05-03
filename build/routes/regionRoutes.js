"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionController_1 = require("../controller/regionController");
class RegionRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regionController_1.regionController.data);
    }
}
const regionRouter = new RegionRouter();
exports.default = regionRouter.router;

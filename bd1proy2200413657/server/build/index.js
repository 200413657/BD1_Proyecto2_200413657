"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const paisRouter_1 = __importDefault(require("./routes/paisRouter"));
const regionRoutes_1 = __importDefault(require("./routes/regionRoutes"));
const preguntaRoutes_1 = __importDefault(require("./routes/preguntaRoutes"));
const encuestaRoutes_1 = __importDefault(require("./routes/encuestaRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //permite saber el tipo de peticion PUT, POST,GET, etc, el codigo de respuesta y el tiempo
        this.app.use(cors_1.default()); //pide datos al servidor
        this.app.use(express_1.default.json()); //permite recibir datos en formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //para formulario html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/data', dataRoutes_1.default);
        this.app.use('/api/encuesta', encuestaRoutes_1.default);
        this.app.use('/crud/pais', paisRouter_1.default);
        this.app.use('/crud/pregunta', preguntaRoutes_1.default);
        this.app.use('/crud/region', regionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

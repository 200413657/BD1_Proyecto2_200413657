"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preguntaController = void 0;
const database_1 = __importDefault(require("../database"));
class PreguntaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT p.id,p.PREGUNTA,p.id_encuesta,(select e.nombre from encuesta e where e.id=p.id_encuesta) encuesta FROM pregunta p order by id_encuesta asc", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    obtieneUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("SELECT * FROM pregunta where id = ?", [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query("INSERT INTO pregunta set ?", [req.body]);
            res.json({ message: 'Pais Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            yield database_1.default.query('UPDATE pregunta SET ? Where id = ?', [req.body, id]);
            res.json({ message: 'actualizando pais ' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pregunta Where id = ?', [id]);
            res.json({ message: 'El pais fue eliminado' });
        });
    }
}
exports.preguntaController = new PreguntaController();

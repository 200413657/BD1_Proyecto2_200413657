"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
//const pool1 = mysql.createPool(keys.database);
/*const pool2 = mysql.createPool({
    host:'35.202.27.87',
    user:'root',
    password: 'oracle',
    database: 'bd1p2_200413657',
    connectionLimit:1000,
   
});*/
const pool2 = mysql_1.default.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bd1p2_200413657',
    connectionLimit: 1000
});
pool2.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('DB is connected');
});
exports.default = pool2;

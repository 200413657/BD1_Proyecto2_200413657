import {Request,Response} from 'express';
import db from '../database';
class DataController{

    public async listar(req:Request,res:Response): Promise<void>{
      const { id } = req.params;
      await  db.query("call reporte(?)",[id],function(err,result,fields){
        if(err) throw err;
        res.json(result[0]);
    });
        //res.json({text:'obteniendo consulta 1'});
    }

}

export const dataController = new DataController();
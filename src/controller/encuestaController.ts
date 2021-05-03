import {Request,Response} from 'express';
import db from '../database';
class EncuestaController{

    public async data(req:Request,res:Response): Promise<void>{
        await db.query("select id,nombre from encuesta order by id asc ",function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
        
    }

    public async obtieneUno(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        await db.query("SELECT id,nombre FROM encuesta where id = ?",[id],function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
    }
   
}

export const encuestaController = new EncuestaController();
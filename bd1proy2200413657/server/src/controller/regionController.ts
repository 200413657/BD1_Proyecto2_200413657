import {Request,Response} from 'express';
import db from '../database';
class RegionController{

    public async data(req:Request,res:Response): Promise<void>{
        await db.query("SELECT * FROM region",function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
        
    }
}

export const regionController = new RegionController();
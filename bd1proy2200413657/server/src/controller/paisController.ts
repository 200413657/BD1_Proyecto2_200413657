import {Request,Response} from 'express';
import db from '../database';
class PaisController{

    public async data(req:Request,res:Response): Promise<void>{
        await db.query("select p.id,p.nombre,p.poblacion,p.area,p.capital,p.id_region,(select r.nombre from region r where r.id = p.id_region) region from pais p ",function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
        
    }

    public async obtieneUno(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        await db.query("SELECT * FROM pais where id = ?",[id],function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
    }
    public async create(req:Request,res:Response): Promise<void>{
        console.log(req.body);
        try{
            await db.query("INSERT INTO pais set ?",[req.body]);
        await db.query("commit;");
        
        res.json({message:'Pais Guardado'});

        }catch(error){
            res.json(error);
        }
    }
    
    public async update(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        console.log(req.body);
        await db.query('UPDATE pais SET ? Where id = ?',[req.body,id]);
        res.json({message:'actualizando pais '+ req.params.id});
    } 
    
    public async delete(req:Request,res:Response): Promise<void>{
         const {id} = req.params;
         await db.query('DELETE FROM pais Where id = ?',[id]);
         res.json({message:'El pais fue eliminado'});
    }

}

export const paisController = new PaisController();
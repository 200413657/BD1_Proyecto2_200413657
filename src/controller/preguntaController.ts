import {Request,Response} from 'express';
import db from '../database';
class PreguntaController{

    public async lista(req:Request,res:Response): Promise<void>{
        await db.query("SELECT p.id,p.PREGUNTA,p.id_encuesta,(select e.nombre from encuesta e where e.id=p.id_encuesta) encuesta FROM pregunta p order by id_encuesta asc",function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
        
    }

    public async obtieneUno(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        await db.query("SELECT * FROM pregunta where id = ?",[id],function(err,result,fields){
            if(err) throw err;
            res.json(result);
        });
       
    }
    public async create(req:Request,res:Response): Promise<void>{
        //console.log(req.body);
        await db.query("INSERT INTO pregunta set ?",[req.body]);
        res.json({message:'Pais Guardado'});
    }
    public async update(req:Request,res:Response): Promise<void>{
        console.log(req.body);
        const {id} = req.params;
        await db.query('UPDATE pregunta SET ? Where id = ?',[req.body,id]);
        res.json({message:'actualizando pais '+ req.params.id});
    } 
    
    public async delete(req:Request,res:Response): Promise<void>{
         const {id} = req.params;
         await db.query('DELETE FROM pregunta Where id = ?',[id]);
         res.json({message:'El pais fue eliminado'});
    }

}

export const preguntaController = new PreguntaController();
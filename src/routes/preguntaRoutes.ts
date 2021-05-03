import {Router} from 'express';
import {preguntaController} from '../controller/preguntaController';
class PaisRouter{

    router: Router = Router();

    constructor(){
        this.config();
    }

    public config():void{
        this.router.get('/',preguntaController.lista);
        this.router.get('/:id',preguntaController.obtieneUno);
        this.router.post('/',preguntaController.create);
        this.router.put('/:id',preguntaController.update);
        this.router.delete('/:id',preguntaController.delete);
    }

}

const paisRouter  =new PaisRouter();
export default paisRouter.router;
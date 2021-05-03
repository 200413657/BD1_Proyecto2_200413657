import {Router} from 'express';
import {encuestaController} from '../controller/encuestaController';
class EncuestaRouter{

    router: Router = Router();

    constructor(){
        this.config();
    }

    public config():void{
        this.router.get('/',encuestaController.data);
        this.router.get('/:id',encuestaController.obtieneUno);
       
    }

}

const encuestaRouter  =new EncuestaRouter();
export default encuestaRouter.router;
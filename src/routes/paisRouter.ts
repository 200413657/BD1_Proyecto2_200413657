import {Router} from 'express';
import {paisController} from '../controller/paisController';
class PaisRouter{

    router: Router = Router();

    constructor(){
        this.config();
    }

    public config():void{
        this.router.get('/',paisController.data);
        this.router.get('/:id',paisController.obtieneUno);
        this.router.post('/',paisController.create);
        this.router.put('/:id',paisController.update);
        this.router.delete('/:id',paisController.delete);
    }

}

const paisRouter  =new PaisRouter();
export default paisRouter.router;
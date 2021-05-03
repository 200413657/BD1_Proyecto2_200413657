import {Router} from 'express';
import {dataController} from '../controller/dataController';
class DataRouter{

    router: Router = Router();

    constructor(){
        this.config();
    }

    public config():void{
        this.router.get('/:id',dataController.listar);
       // this.router.post('/');
    }
}

const dataRoutes  =new DataRouter();
export default dataRoutes.router;
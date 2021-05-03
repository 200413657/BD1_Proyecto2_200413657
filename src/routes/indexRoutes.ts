import {Router} from 'express';
import {indexController} from '../controller/indexController';
class IndexRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    public config():void{
        this.router.get('/',indexController.index);
    }
}

const indexRoutes  =new IndexRoutes();
export default indexRoutes.router;
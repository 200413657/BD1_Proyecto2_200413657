import {Router} from 'express';
import {regionController} from '../controller/regionController';
class RegionRouter{

    router: Router = Router();

    constructor(){
        this.config();
    }

    public config():void{
        this.router.get('/',regionController.data);
    }

}

const regionRouter  =new RegionRouter();
export default regionRouter.router;
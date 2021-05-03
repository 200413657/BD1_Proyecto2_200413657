import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import dataRoutes from './routes/dataRoutes';
import paisRoutes from './routes/paisRouter';
import regionRoutes from './routes/regionRoutes';
import preguntaRoutes from './routes/preguntaRoutes';
import encuestaRoutes from './routes/encuestaRoutes';
class Server{
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT||3000);
        this.app.use(morgan('dev'));//permite saber el tipo de peticion PUT, POST,GET, etc, el codigo de respuesta y el tiempo
        this.app.use(cors());//pide datos al servidor
        this.app.use(express.json());//permite recibir datos en formato json
        this.app.use(express.urlencoded({extended:false}));//para formulario html
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/data',dataRoutes);
        this.app.use('/api/encuesta',encuestaRoutes);
        this.app.use('/crud/pais',paisRoutes);
        this.app.use('/crud/pregunta',preguntaRoutes);
        this.app.use('/crud/region',regionRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'),() => {
            console.log('Server on port ',this.app.get('port'));
        });
    }
}


const server = new Server();
server.start();
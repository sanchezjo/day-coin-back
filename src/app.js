import bodyParser from 'body-parser';
import express from 'express';
import { ApiRoute } from './routes/api.js';
import { BtcsRoute } from './routes/btcs.js';
import cors from 'cors';
import Config from './utils/config.js';
import morgan from 'morgan';
import { errorHandler } from './middleware/error.js'

const appConfig = new Config();

class App {
  corsOptionClient = {
    origin: appConfig.getClientOrigin(),
    methods: 'GET',
  };

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(cors(this.corsOptionClient));

    this.#addMiddlewares();

    this.#addRoutes();

    this.app.use(errorHandler);
  }

  #addMiddlewares() {
    if (appConfig.getEnv() === 'DEV') {
      this.app.use(morgan('dev'));
    }
  }

  #addRoutes() {
    this.apiRoutes = new ApiRoute();
    this.apiRoutes.routes(this.app);

    this.btcRoutes = new BtcsRoute();
    this.btcRoutes.routes(this.app);
  }
}

export default new App().app;

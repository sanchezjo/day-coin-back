import * as apiController from '../controllers/api.js';

export class ApiRoute {
  routes(app) {
    app.route('/server/ping').get(apiController.ping);
  }
}

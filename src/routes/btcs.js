import * as btcController from '../controllers/btc.js';

export class BtcsRoute {
  routes(app) {
    app.route('/btcs').get(btcController.getLast24);
  }
}

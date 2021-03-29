import { BtcModel } from './btc.js';

class BtcService {
  constructor() {
    this.Btc = BtcModel;
  }

  async getLast24() {
    return this.Btc.find().limit((24 * 60) / 5);
  }
}

export default new BtcService();

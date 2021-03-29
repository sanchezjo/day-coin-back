import axios from 'axios';
import { BtcModel } from '../models/btc/btc.js';

/**
 * Get and persist the current BTC value
 */
class PersistCoinCommand {
  #URL = 'https://api.coindesk.com';

  constructor() {}

  exec() {
    this.getCoinJson().then((response) => {
      const newRecord = new BtcModel({
        date: response.data.time.updated,
        rate_float: response.data.bpi.EUR.rate_float,
        code: response.data.bpi.EUR.code,
      });

      newRecord.save((error, record) => {
        if (error) {
          console.log('error', error);
        }
      });
    });
  }

  // Call the API
  async getCoinJson() {
    try {
      return await axios.get(`${this.#URL}/v1/bpi/currentprice/EUR.json`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PersistCoinCommand();

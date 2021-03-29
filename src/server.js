
import * as http from 'http';
import Config from './utils/config.js';
import app from './app.js';
import { connectDB } from './utils/db.js';
import Cron from 'node-cron';
import PersistCoinCommand from './command/persistCoin.js';

const appConfig = new Config();

// Connect to DB
await connectDB();

// Schedule Cron tasks
Cron.schedule('*/5 * * * *', () => {
  PersistCoinCommand.exec();
});

// Launch server
const PORT = appConfig.getServerPort();

http.createServer(app).listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

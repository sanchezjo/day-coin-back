import Mongoose from 'mongoose';
import Config from './config.js';

const appConfig = new Config();

export const connectDB = async () => {
  const conn = await Mongoose.connect(appConfig.getMongoUri(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

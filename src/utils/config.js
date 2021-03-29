import * as dotenv from 'dotenv';

export default class Config {
  constructor() {
    dotenv.config();
  }

  getServerPort() {
    const PORT = Number(process.env.PORT);
    if (isNaN(PORT)) {
      return 5000;
    }
    return PORT;
  }

  getClientOrigin() {
    const FRONT_ORIGIN = process.env.FRONT_ORIGIN;
    if (!FRONT_ORIGIN) {
      return 'http://localhost:4200';
    }
    return FRONT_ORIGIN;
  }

  getMongoUri() {
    const MONGO_URI = process.env.MONGO_URI;
    if (MONGO_URI) {
      return MONGO_URI;
    } else {
      throw Error('Identifiant de connection à la base de donnée non valide');
    }
  }
}

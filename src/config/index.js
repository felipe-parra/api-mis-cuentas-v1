import dotenv from "dotenv";

dotenv.config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  versionApi: process.env.VERSION_API,
  genSalt: process.env.GEN_SALT,
  dbUriMongoAtlas: process.env.DB_URI_MONGO_ATLAS,
  dbUriMongoLocal: process.env.DB_URI_MONGO_LOCAL,
  dbMongoUser: process.env.DB_MONGO_USER,
  dbMongoPass: process.env.DB_MONGO_PASS,
  dbMongoName: process.env.DB_MONGO_NAME,
  jwtSecret: process.env.JWT_SECRET,
  appSecret: process.env.APP_SECRET,
  timeExpiresToken: process.env.TIME_EXPIRES_TOKEN,
};

export default config;

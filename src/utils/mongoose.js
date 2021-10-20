import mongoose from "mongoose";
import config from "../config";

mongoose
  .connect(config.dbUriMongoLocal, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`DB is connected to: ${db.connections[0].name}`))
  .catch((err) => console.log(err));

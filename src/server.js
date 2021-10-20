import app from "./app";
import config from "./config";
import logger from "morgan";

if (config.nodeEnv !== "production") {
  app.use(logger("dev"));
}

app.listen(config.port, function () {
  console.log(`Server listening on port: ${config.port}`);
});

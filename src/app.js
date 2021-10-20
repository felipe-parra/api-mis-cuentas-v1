import express from "express";
import cors from "cors";
import config from "./config";
import router from "./routes";
import { verifyAppToken } from "./middlewares/verifyTokenApp";

// database
import "./utils/mongoose";

// init app
const app = express();

// config app
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middlewares
app.use(cors("*"));

// config routes
app.use(`/api/${config.versionApi}/`, verifyAppToken, router);

export default app;

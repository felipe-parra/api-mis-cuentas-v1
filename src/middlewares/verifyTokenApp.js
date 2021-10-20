import jwt from "jsonwebtoken";
import config from "../config";
import utils from "../utils";

export const verifyAppToken = async (req, res, next) => {
  let token = req.headers["access-token-app"];

  if (!token) {
    utils.handleErrorResponse({
      statusCode: 403,
      msg: "No token provided",
      res,
    });
  }
  if (token === config.appSecret) {
    next();
  } else {
    utils.handleErrorResponse({
      statusCode: 401,
      msg: "Unauthorized!",
      res,
    });
  }
};


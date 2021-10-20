import User from "../models/user.schema";
import { handleErrorResponse } from "../utils";

import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";

export default async function verifyToken(req, res, next) {
  let token = req.headers["x-access-token"];

  if (!token) {
    handleErrorResponse({ statusCode: 403, msg: "No token provided", res });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });

    if (!user)
      handleErrorResponse({
        statusCode: 404,
        res,
      });

    next();
  } catch (error) {
    console.log(error);
    handleErrorResponse({
      statusCode: 401,
      msg: "Unauthorized!",
      res,
    });
  }
}

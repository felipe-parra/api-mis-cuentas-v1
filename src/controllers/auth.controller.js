import jwt from "jsonwebtoken";
import User from "../models/user.schema";
import { handleErrorResponse, handleSuccessResponse } from "../utils";
import config from "../config";

export const signUpController = async (req, res) => {
  try {
    const user = {
      ...req.body,
    };

    user.password = await User.encryptPassword(user.password);

    const emailValidation = await User.emailValidation(user.mail);

    if (!emailValidation) {
      handleErrorResponse({ res, msg: "Email not valid" });
    }

    let userCreated = await User.create({ ...user });

    const payload = {
      id: userCreated.mail,
    };

    const token = jwt.sign({ ...payload }, config.jwtSecret, {
      expiresIn: Number(config.timeExpiresToken), // 24 hours
    });

    delete userCreated["_doc"].password;

    handleSuccessResponse({
      statusCode: 201,
      msg: "register successfully",
      data: { ...userCreated["_doc"], token },
      res,
    });
  } catch (error) {
    console.log(error);
    handleErrorResponse({ res });
  }
};

export const signInController = async (req, res) => {
  try {
    const { mail, password } = req.body;

    let userFound = await User.findOne({ mail: mail });

    if (!userFound) {
      handleErrorResponse({ res, msg: "User or password not match" });
    }

    const matchPassword = await User.checkPassword(
      password,
      userFound.password
    );

    delete userFound["_doc"].password;

    if (!matchPassword) {
      handleErrorResponse({
        res,
        msg: "User or password not match",
        statusCode: 401,
      });
    }
    const token = jwt.sign({ id: userFound._id }, config.jwtSecret, {
      expiresIn: Number(config.timeExpiresToken), // 24 hours
    });

    handleSuccessResponse({
      statusCode: 200,
      msg: "login successfully",
      data: { ...userFound["_doc"], token: token },
      res,
    });
  } catch (error) {
    handleErrorResponse({ res });
  }
};

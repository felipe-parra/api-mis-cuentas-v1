import { Schema, model, Types } from "mongoose";
import bcrypt from "bcryptjs";
import { genSalt } from "../config";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 128,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 256,
    },
    mail: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 128,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      maxlength: 255,
    },
    birthday: {
      type: Number,
      maxlength: 3,
    },
    gender: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    ba: [
      {
        type: Types.ObjectId,
        ref: "BA",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(genSalt);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;
};

userSchema.statics.checkPassword = async (password, receivePassword) => {
  const decodedPass = await bcrypt.compare(password, receivePassword);
  return decodedPass;
};

userSchema.statics.emailValidation = async (email) => {
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValidation.test(String(email).toLowerCase());
};

const User = model("User", userSchema);

export default User;

import { Schema, model } from "mongoose";

const bankSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 128,
    },
    rfc: {
      type: String,
      unique: tru,
      maxlength: 13,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BankModel = model("Bank", bankSchema);

export default BankModel;

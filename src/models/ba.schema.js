import { Schema, model, Types } from "mongoose";

const baSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 128,
    },
    description: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 512,
    },
    number: {
      type: String,
      maxlength: 128,
    },
    reference: {
      type: String,
      maxlength: 128,
    },
    bank:{
        type: Types.ObjectId,
        ref:'Bank'
    }
  },
  {
    timestamps: true,
  }
);

const BaModel = model("BA", baSchema);

export default BaModel;

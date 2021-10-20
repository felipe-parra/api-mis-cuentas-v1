import BA from "../models/ba.schema";
import { handleErrorResponse, handleSuccessResponse } from "../utils";

export const getAllBa = async (req, res) => {
  try {
    const baReceived = await BA.find().populate("bank");

    handleSuccessResponse({
      msg: "ba listed",
      data: baReceived,
      res,
    });
  } catch (error) {
    handleErrorResponse({ res });
  }
};
export const getOneBa = async (req, res) => {
  const { baId } = req.params;
  try {
    if (!baId) {
      handleErrorResponse({ msg: " Missing id" });
    }
    const baFound = await BA.findById(baId).populate("bank");

    handleSuccessResponse({
      msg: "ba listed",
      data: baFound,
      res,
    });
  } catch (error) {
    console.log(error);
    handleErrorResponse({ res });
  }
};
export const createOne = async (req, res) => {

};
export const updateOne = async (req, res) => {};
export const deleteOne = async (req, res) => {};

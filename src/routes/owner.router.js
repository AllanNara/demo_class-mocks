import { Router } from "express";
import ownerModel from "../models/Owner.js";

export const ownerRouter = Router();

ownerRouter.get("/", async (req, res, next) => {
  try {
    res.json({ status: "success", data: await ownerModel.find({}).populate("pet") });
  } catch (error) {
    next(error);
  }
});

ownerRouter.get("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: await ownerModel.findById(req.params.id),
    });
  } catch (error) {
    next(error);
  }
});

ownerRouter.put("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: await ownerModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      ),
    });
  } catch (error) {
    next(error);
  }
});

ownerRouter.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const owner = await ownerModel.create(body);
    res.json({ status: "success", payload: owner });
  } catch (error) {
    next(error);
  }
});

import { Router } from "express";
import petModel from "../models/Pet.js";

export const petRouter = Router();

petRouter.get("/", async (req, res, next) => {
  try {
    res.json({ status: "success", data: await petModel.find({}) });
  } catch (error) {
    next(error);
  }
});

petRouter.get("/:id", async (req, res, next) => {
  try {
    res.json({
      status: "success",
      data: await petModel.findById(req.params.id),
    });
  } catch (error) {
    next(error);
  }
});

petRouter.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const newPet = await petModel.create(body);
    res.json({ status: "success", payload: newPet });
  } catch (error) {
    next(error);
  }
});

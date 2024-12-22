import { Router } from "express";
import { petRouter } from "./pet.router.js";
import { ownerRouter } from "./owner.router.js";
import { generateMockOwner, generateMockPet } from "../utils/generate-mocks.js";
import petModel from "../models/Pet.js";
import ownerModel from "../models/Owner.js";

export const apiRouter = Router();

apiRouter.use("/pets", petRouter);
apiRouter.use("/owners", ownerRouter);

apiRouter.get("/seed", async (req, res, next) => {
  try {
    await petModel.deleteMany({});
    await ownerModel.deleteMany({});

    const pets = generateMockPet(50);
    const owners = generateMockOwner(33);

    await petModel.create(pets);
    await ownerModel.create(owners);
    res.send("SEED EXECUTED")
  } catch (error) {
    console.log("error seeds");
    next(error);
  }
});

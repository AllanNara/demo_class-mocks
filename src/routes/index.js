import { Router } from "express";
import { petRouter } from "./pet.router.js";
import { ownerRouter } from "./owner.router.js";

export const apiRouter = Router();

apiRouter.use("/pets", petRouter);
apiRouter.use("/owners", ownerRouter);

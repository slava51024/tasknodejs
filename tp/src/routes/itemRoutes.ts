import { Router } from "express";
import * as controller from "../controllers/itemController";
import validateItem from "../middlewares/validateItem";

const router = Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateItem, controller.create);
router.put("/:id", validateItem, controller.update);
router.patch("/:id", controller.patch);
router.delete("/:id", controller.remove);

export default router;

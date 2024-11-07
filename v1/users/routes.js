import { Router } from "express";
import { checkSchema } from "express-validator";
import { save, update, getAll, destroy, findById } from "./controller.js";
import { schema } from "./schema.js";

const router = Router();

router.get("/", getAll);
router.post("/", checkSchema(schema), save);
router.get("/:id", findById);
router.put("/:id", checkSchema(schema), update);
router.delete("/:id", destroy);

export default router;

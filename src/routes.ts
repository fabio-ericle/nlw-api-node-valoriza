import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);

export { router };
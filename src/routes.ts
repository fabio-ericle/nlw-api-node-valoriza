import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentsController } from './controllers/CreateComplimentsController'
import { ListUsersController } from './controllers/ListUsersController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const createComplimentsController = new CreateComplimentsController();
const listUsersController = new ListUsersController();
const listTagsController = new ListTagsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const authenticateUserController = new AuthenticateUserController();

router.use(ensureAdmin);
router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/compliments", createComplimentsController.handle);
router.post("/login", authenticateUserController.handle);

router.get("/users", ensureAuthenticated, listUsersController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users/compliments/send", listUserSendComplimentsController.handle);
router.get("/users/compliments/receiver", listUserReceiverComplimentsController.handle);

export { router };
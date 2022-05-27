import { Router } from 'express';

import UserController from './controllers/UserController.js';
import SessionController from './controllers/SessionController.js';
import auth from './middlewares/auth.js';

const routes = new Router();


routes.post("/users", UserController.create);
routes.post("/session", SessionController.create);

//MIDDLEWARE (o que tem acima não quero autenticação, o que tem abaixo eu quero.)

routes.use(auth);
routes.get("/users", UserController.index);

export default routes;

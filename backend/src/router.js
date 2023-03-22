import { Router } from "express";
import { UserController } from './controllers/userController.js'
import { UserService } from "./services/userService.js";
import { validateRegistration } from "./validations/validateRegistration.js"

const router = Router();

router.post('/registration', validateRegistration, (request, response) => {
  const userService = new UserService()
  const userController = new UserController(userService);
  return userController.register(request, response);
});

export { router };
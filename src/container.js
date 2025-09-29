


// src/container.js

import { UserRepository } from "./repositories/UserRepository.js";
import { UserService } from "./services/User.service.js";
import { SignUpController } from "./controllers/auth/signUp.controller.js";
import { LoginController } from "./controllers/auth/login.controller.js";
import {sequelize} from "./config/database.js";
import UserModel from "./models/user.js";

const User = UserModel(sequelize);

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

export const signUpController = new SignUpController(userService);
export const loginController = new LoginController(userService);
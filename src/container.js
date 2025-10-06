


// src/container.js

import { UserRepository } from "./repositories/UserRepository.js";
import { UserService } from "./services/User.service.js";
import { SignUpController } from "./controllers/auth/signUp.controller.js";
import { LoginController } from "./controllers/auth/login.controller.js";
import {sequelize} from "./config/database.js";
import { CategoryService } from "./services/Category.service.js";
import { CategoryRepository } from "./repositories/CategoryRepository.js";
import { CategoryController } from "./controllers/category.controller.js";
import { TransactionService } from "./services/Transaction.service.js";
import { TransactionRepository } from "./repositories/TransactionRepository.js";
import { TransactionController } from "./controllers/transaction.controller.js";
import TransactionModel from "./models/transaction.js";
import CategoryModel from "./models/category.js";
import UserModel from "./models/user.js";

const User = UserModel(sequelize);
const Category = CategoryModel(sequelize);
const Transaction = TransactionModel(sequelize);

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);
const categoryRepository = new CategoryRepository(Category);
export const categoryService = new CategoryService(categoryRepository);

const transactionRepository = new TransactionRepository(Transaction);
export const transactionService = new TransactionService(transactionRepository, categoryRepository);


export const signUpController = new SignUpController(userService);
export const loginController = new LoginController(userService);
export const categoryController = new CategoryController(categoryService);
export const transactionController = new TransactionController(transactionService, categoryService);
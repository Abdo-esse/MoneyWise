import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './utils/logger.js';
import { renderHome, renderAbout } from './controllers/page.controller.js';
import expressLayouts from "express-ejs-layouts";
import {renderForgotPassword} from "./controllers/auth/forgotPassword.controller.js"
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();

// Config EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set("layout", "layout/main"); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connection DB
(async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connected successfully.');
  } catch (err) {
    logger.error('Unable to connect to DB:', err);
  }
})();

// Routes
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/auth', authRoutes);
app.get('/home', renderHome);
app.get('/about', renderAbout);
app.get('/tests', renderHome);
app.get('/auth/forgot-password',renderForgotPassword)
// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});



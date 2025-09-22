import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './utils/logger.js';

dotenv.config();
const app = express();

// Config EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// Test DB
(async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connected successfully.');
  } catch (err) {
    logger.error('Unable to connect to DB:', err);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

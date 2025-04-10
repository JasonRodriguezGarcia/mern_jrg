// USERS
import express from "express";
import path from "path";
import cors from 'cors';
import { fileURLToPath } from "url";
// import PouchDB from 'pouchdb';
import usersRouter from './routes/users.js';
import carsRouter from './routes/cars.js';
import descriptionsRouter from './routes/descriptions.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // para tener acceso desde React, ya que React y Express no están en el mismo directorio
app.use(express.json());
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/cars', carsRouter)
app.use('/api/v1/descriptions', descriptionsRouter)

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
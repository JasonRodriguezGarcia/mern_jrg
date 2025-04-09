import path from 'path';
import { fileURLToPath } from 'url';
import PouchDB from 'pouchdb';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a path to the local "data" directory
const dataDirectory = path.join(__dirname, 'data');

// Use the prefix config for PouchDB to store data in "data" folder
const db = new PouchDB(path.join(dataDirectory, 'tienda')); // 'tienda' is your database name

export default db;
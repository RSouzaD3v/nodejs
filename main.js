import express, { json } from 'express';
import { router } from './router.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta http://localhost:${PORT}`);
});
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import connectDb from './config/database.js';
import contentRoutes from './routes/contentRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', contentRoutes);

connectDb();

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta http://localhost:${PORT}`);
});
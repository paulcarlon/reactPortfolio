import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import postRoutes from './routes/postRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`POWERMAN ${PORT} in ${process.env.NODE_ENV}`));

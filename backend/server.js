import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import postRoutes from './routes/postRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/posts', postRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`POWERMAN ${PORT} in ${process.env.NODE_ENV}`));

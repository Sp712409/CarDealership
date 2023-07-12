// index.js
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import client from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
import carRoutes from './src/routes/carRoutes.js';
import dealershipRoutes from './src/routes/dealershipRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const upload = multer();

client.connect((error) => {
    if (error) {
      console.error('Failed to connect to MongoDB:', error);
      process.exit(1);
    }
    app.listen(3000, () => {
        console.log('Server started on port 3000');
      });
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.none());

app.use('/auth', authRoutes);
app.use('/cars', carRoutes);
app.use('/dealerships', dealershipRoutes);
app.use('/users', userRoutes);
import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/posts.js';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
const PORT = process.env.PORT || 3500;

app.use('/api/v1/posts', router);

const connect = async () => {
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, (req, res) => console.log(`connected to port ${PORT}`));
  } catch (error) {
    console.log(error.message)
  }
}


connect()
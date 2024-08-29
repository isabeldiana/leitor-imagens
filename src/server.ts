require('dotenv').config();
import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', );


app.listen(process.env.PORT);
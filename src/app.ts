import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRoutes } from './app/modules/bicycles/bicycle.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', BicycleRoutes);

export default app;

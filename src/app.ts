import express, { Application } from 'express';
import cors from 'cors';
import { BicycleRoutes } from './app/modules/bicycles/bicycle.route';
import { OrderRoutes } from './app/modules/orders/order.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', BicycleRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/orders/revenue', OrderRoutes);

export default app;

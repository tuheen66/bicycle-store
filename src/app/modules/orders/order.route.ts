import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderControllers.createOrder);

router.get('/', OrderControllers.getAllOrders);

router.get("/total-revenue", OrderControllers.getRevenue)

export const OrderRoutes = router;

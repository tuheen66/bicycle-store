import express from 'express';
import { BicycleControllers } from './bicycle.controller';

const router = express.Router();

router.post('/create-bicycle', BicycleControllers.createBicycle);

router.get('/', BicycleControllers.getAllBicycle);

export const BicycleRoutes = router;

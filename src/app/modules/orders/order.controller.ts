/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderServices.createOrder(order);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderServices.calculateRevenue();
    res.status(200).json({
      success: true,
      message: ' Revenue calculated successfully',
      data: { totalRevenue },
    });
  } catch (error:any) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error:error.message,
      stack: error.stack,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getRevenue,
};

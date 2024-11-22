import { Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body;

    const result = await BicycleServices.createBicycleIntoDB(bicycle);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

const getAllBicycle = async (req: Request, res: Response) => {
  try {
    const result = await BicycleServices.getAllBicycleFromDB();
    res.status(200).json({
      success: true,
      message: 'Bicycles are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getAllBicycle,
};

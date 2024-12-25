/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body;
    const result = await BicycleServices.createBicycleIntoDB(bicycle);

    res.status(200).json({
      success: true,
      message: 'Bicycle is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
      stack: error.stack,
    });
  }
};

const getAllBicycle = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query as { searchTerm?: string };
    const result = await BicycleServices.getAllBicycleFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: 'Bicycles are retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error.message,
      stack: error.stack,
    });
  }
};

const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await BicycleServices.getSingleBicycle(id);
    res.send({
      success: true,
      message: 'Bicycle retrieved successfully',
      data: result,
    });
  } catch (error:any) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error:error.message,
      stack: error.stack,
    });
  }
};

const updateBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const body = req.body;
    const result = await BicycleServices.updateBicycle(id, body);

    res.send({
      success: true,
      message: 'Bicycle updated successfully',
      data: result,
    });
  } catch (error:any) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error:error.message,
      stack: error.stack,
    });
  }
};

const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    await BicycleServices.deleteBicycle(id);

    res.send({
      success: true,
      message: 'Bicycle deleted successfully',
      data: {},
    });
  } catch (error:any) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error:error.message,
      stack: error.stack,
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getAllBicycle,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
};

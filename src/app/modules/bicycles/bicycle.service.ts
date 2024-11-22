import { TBicycle } from './bicycle.interface';
import { Bicycle } from './bicycle.model';

const createBicycleIntoDB = async (bicycle: TBicycle) => {
  const result = await Bicycle.create(bicycle);
  return result;
};

const getAllBicycleFromDB = async () => {
  const result = await Bicycle.find();
  return result;
};

export const BicycleServices = {
  createBicycleIntoDB,
  getAllBicycleFromDB,
};

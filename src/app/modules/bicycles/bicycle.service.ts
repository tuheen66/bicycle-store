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

const getSingleBicycle = async (id: string) => {
  const result = await Bicycle.findById(id);
  return result;
};

const updateBicycle = async (productId: string, data: Partial<TBicycle>) => {
  const result = await Bicycle.findByIdAndUpdate(productId, data);
  return result;
};

const deleteBicycle = async (productId: string) => {
  const result = await Bicycle.findByIdAndDelete(productId);
  return result;
};

export const BicycleServices = {
  createBicycleIntoDB,
  getAllBicycleFromDB,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
};

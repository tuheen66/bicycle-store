import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrders = async () => {
    const result = await Order.find();
    return result;
  };
  

const calculateRevenue = async (): Promise<number> => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  console.log('Aggregation result:', result[0]?.totalRevenue);

  return result[0]?.totalRevenue || 0;
};



export const orderServices = {
  createOrder,
  getAllOrders,
  calculateRevenue,
};

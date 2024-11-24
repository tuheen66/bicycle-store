import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (order: TOrder) => {
  const result = await Order.create(order);
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

  return result[0]?.totalRevenue || 0;
};

export const orderServices = {
  createOrder,
   calculateRevenue,
};

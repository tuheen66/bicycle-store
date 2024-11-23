import mongoose, { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import { Bicycle } from '../bicycles/bicycle.model';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'bicycle-store',
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

orderSchema.pre('save', async function (next) {
  const order = this as TOrder;
  const product = await Bicycle.findById(order.product);

  if (!product) {
    throw new Error('Product not found');
  }
  if (product.quantity < order.quantity) {
    throw new Error('Insufficient stock for this product');
  }
  product.quantity -= order.quantity;

  await product.save();

  next();
});

export const Order = model<TOrder>('Order', orderSchema);

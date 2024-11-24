import mongoose, { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import { Bicycle } from '../bicycles/bicycle.model';

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address',
      ],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Product reference is required'],
      ref: 'bicycle-store',
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive number'],
    },
  },
  { timestamps: true },
);

orderSchema.pre('save', async function (next) {
  const order = this as TOrder;
  const product = await Bicycle.findById(order.product);

  if (!product) {
    return next(new Error('Status:404, Product not found'));
  }
  if (product.quantity < order.quantity) {
    return next(new Error('Insufficient stock for this product'));
  }
  product.quantity -= order.quantity;

  await product.save();

  next();
});

export const Order = model<TOrder>('Order', orderSchema);

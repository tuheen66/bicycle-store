import { model, Schema } from 'mongoose';
import { TBicycle } from './bicycle.interface';

const bicycleSchema = new Schema<TBicycle>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    price: {
      type: Number,
      require: [true, 'Price is required'],
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message:
          "{VALUE} : The type of bicycle can only be of the followings : 'Mountain', 'Road', 'Hybrid', 'BMX', 'Electric' ",
      },
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

bicycleSchema.methods.lowInventory = async function (orderQuantity: number) {
  if (orderQuantity > this.quantity) {
    throw new Error('Insufficient stock');
  }
};

bicycleSchema.pre('save', function (next) {
  if (this.quantity === 0) {
    this.inStock = false;
  } else {
    this.inStock = true;
  }

  next();
});

export const Bicycle = model<TBicycle>('Bicycle', bicycleSchema);

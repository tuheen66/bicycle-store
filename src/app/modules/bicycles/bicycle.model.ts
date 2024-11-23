import { model, Schema } from 'mongoose';
import { TBicycle } from './bicycle.interface';
import { Date } from 'mongoose';

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
      required: true,
    },
  }
);



export const Bicycle = model<TBicycle>('Bicycle', bicycleSchema);

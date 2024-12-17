"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
const mongoose_1 = require("mongoose");
const bicycleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [5, 'Name must be at least 5 characters long'],
        maxlength: [30, 'Name cannot exceed 30 characters'],
        trim: true,
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        minlength: [5, 'Brand must be at least 5 characters long'],
        maxlength: [30, 'Brand cannot exceed 30 characters'],
        trim: true,
    },
    price: {
        type: Number,
        require: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
    },
    type: {
        type: String,
        enum: {
            values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
            message: "{VALUE} : The type of bicycle can only be of the followings : 'Mountain', 'Road', 'Hybrid', 'BMX', 'Electric' ",
        },
        required: [true, 'Type is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 10 characters long'],
        maxlength: [150, 'Description cannot exceed 150 characters'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity must be a positive number'],
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
bicycleSchema.methods.lowInventory = function (orderQuantity) {
    return __awaiter(this, void 0, void 0, function* () {
        if (orderQuantity > this.quantity) {
            throw new Error('Insufficient stock');
        }
    });
};
bicycleSchema.pre('save', function (next) {
    if (this.quantity === 0) {
        this.inStock = false;
    }
    else {
        this.inStock = true;
    }
    next();
});
exports.Bicycle = (0, mongoose_1.model)('Bicycle', bicycleSchema);

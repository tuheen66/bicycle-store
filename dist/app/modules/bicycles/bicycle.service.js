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
exports.BicycleServices = void 0;
const bicycle_model_1 = require("./bicycle.model");
const createBicycleIntoDB = (bicycle) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.create(bicycle);
    return result;
});
const getAllBicycleFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    if (searchTerm) {
        const searchToLower = searchTerm.toLowerCase();
        filter = {
            $or: [
                { name: { $regex: searchToLower, $options: 'i' } },
                { brand: { $regex: searchToLower, $options: 'i' } },
                { type: { $regex: searchToLower, $options: 'i' } },
            ],
        };
    }
    const result = yield bicycle_model_1.Bicycle.find(filter);
    return result;
});
const getSingleBicycle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.findById(id);
    return result;
});
const updateBicycle = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.findByIdAndUpdate(productId, data);
    return result;
});
const deleteBicycle = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.findByIdAndDelete(productId);
    return result;
});
exports.BicycleServices = {
    createBicycleIntoDB,
    getAllBicycleFromDB,
    getSingleBicycle,
    updateBicycle,
    deleteBicycle,
};

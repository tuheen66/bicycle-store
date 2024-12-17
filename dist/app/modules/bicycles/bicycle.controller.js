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
exports.BicycleControllers = void 0;
const bicycle_service_1 = require("./bicycle.service");
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycle = req.body;
        const result = yield bicycle_service_1.BicycleServices.createBicycleIntoDB(bicycle);
        res.status(200).json({
            success: true,
            message: 'Bicycle is created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error,
        });
    }
});
const getAllBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield bicycle_service_1.BicycleServices.getAllBicycleFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: 'Bicycles are retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
const getSingleBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield bicycle_service_1.BicycleServices.getSingleBicycle(id);
        res.send({
            success: true,
            message: 'Bicycle retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const updateBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const body = req.body;
        const result = yield bicycle_service_1.BicycleServices.updateBicycle(id, body);
        res.send({
            success: true,
            message: 'Bicycle updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const deleteBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        yield bicycle_service_1.BicycleServices.deleteBicycle(id);
        res.send({
            success: true,
            message: 'Bicycle deleted successfully',
            data: {},
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
exports.BicycleControllers = {
    createBicycle,
    getAllBicycle,
    getSingleBicycle,
    updateBicycle,
    deleteBicycle,
};

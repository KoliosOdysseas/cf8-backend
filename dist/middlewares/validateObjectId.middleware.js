"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObjectId = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validateObjectId = (params = 'id') => (req, res, next) => {
    const value = req.params[params];
    if (!value || !mongoose_1.default.Types.ObjectId.isValid(value)) {
        return res.status(400).json({ message: "Not correct ObjectId" });
    }
    next();
};
exports.validateObjectId = validateObjectId;
//# sourceMappingURL=validateObjectId.middleware.js.map
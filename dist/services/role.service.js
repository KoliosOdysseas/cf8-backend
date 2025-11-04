"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRole = exports.updateRole = exports.createRole = exports.findAllRoles = void 0;
const role_model_1 = __importDefault(require("../models/role.model"));
const findAllRoles = async () => {
    return role_model_1.default.find().lean();
};
exports.findAllRoles = findAllRoles;
const createRole = async (payload) => {
    const result = new role_model_1.default(payload);
    return result.save();
};
exports.createRole = createRole;
const updateRole = async (id, payload) => {
    return role_model_1.default.findByIdAndUpdate(id, payload, { new: true });
};
exports.updateRole = updateRole;
const deleteRole = async (id) => {
    return role_model_1.default.findByIdAndDelete(id);
};
exports.deleteRole = deleteRole;
//# sourceMappingURL=role.service.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.findUserById = exports.findAllUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const role_model_1 = __importDefault(require("../models/role.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
const findAllUsers = async () => {
    return user_model_1.default.find().populate('roles').lean();
};
exports.findAllUsers = findAllUsers;
const findUserById = async (id) => {
    return user_model_1.default.findById(id).populate('roles').lean();
};
exports.findUserById = findUserById;
const createUser = async (payload) => {
    if (payload.password) {
        const hash = await bcrypt_1.default.hash(payload.password, SALT_ROUNDS);
        payload.password = hash;
    }
    // let roleIds: Types.ObjectId[] = [];
    let reader = await role_model_1.default.findOne({ role: "READER" });
    if (!reader) {
        reader = await role_model_1.default.create({ role: "Reader", description: "Role Reader", active: true });
    }
    let roleIds = [reader._id];
    const user = new user_model_1.default({ ...payload, roles: roleIds });
    return user.save();
};
exports.createUser = createUser;
const updateUser = async (id, payload) => {
    if (payload.password) {
        const hash = await bcrypt_1.default.hash(payload.password, SALT_ROUNDS);
        payload.password = hash;
    }
    return user_model_1.default.findByIdAndUpdate(id, payload, { new: true }).populate('roles');
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    return user_model_1.default.findByIdAndDelete(id);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map
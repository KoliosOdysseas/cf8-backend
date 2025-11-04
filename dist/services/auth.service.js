"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || '';
const login = async (username, password) => {
    const user = await user_model_1.default.findOne({ username }).populate('roles');
    if (!user)
        return null;
    const match = await bcrypt_1.default.compare(password, user.password);
    if (!match)
        return null;
    const payload = {
        username: user.username,
        email: user.email || '',
        roles: user.roles
    };
    const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    console.log(token);
    return { user, token };
};
exports.login = login;
//# sourceMappingURL=auth.service.js.map
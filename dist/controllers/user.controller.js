"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getOne = exports.list = void 0;
const userService = __importStar(require("../services/user.service"));
const list = async (req, res, next) => {
    try {
        const result = await userService.findAllUsers();
        res.status(201).json(result);
    }
    catch (err) {
        // next(err);
        res.status(401).json(err);
        // res.status(401).json({message:'Users not found'})
    }
};
exports.list = list;
const getOne = async (req, res, next) => {
    try {
        const result = await userService.findUserById(req.params.id);
        if (!result)
            return res.status(404).json({ message: "User not found" });
        res.status(201).json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.getOne = getOne;
const create = async (req, res, next) => {
    try {
        const result = await userService.createUser(req.body);
        res.status(201).json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.create = create;
const update = async (req, res, next) => {
    try {
        const result = await userService.updateUser(req.params.id, req.body);
        res.status(201).json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.update = update;
const remove = async (req, res, next) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        res.status(201).json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.remove = remove;
//# sourceMappingURL=user.controller.js.map
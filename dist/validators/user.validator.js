"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = exports.addressSchema = exports.phoneSchema = void 0;
const zod_1 = require("zod");
exports.phoneSchema = zod_1.z.object({
    type: zod_1.z.string(),
    number: zod_1.z.string()
});
exports.addressSchema = zod_1.z.object({
    area: zod_1.z.string().optional(),
    street: zod_1.z.string().optional(),
    number: zod_1.z.string().optional(),
    po: zod_1.z.string().optional(),
    municipality: zod_1.z.string().optional()
});
exports.createUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(3),
    password: zod_1.z.string().min(5),
    firstname: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    address: exports.addressSchema.optional(),
    phone: zod_1.z.array(exports.phoneSchema).optional(),
    roles: zod_1.z.array(zod_1.z.string()).optional()
});
exports.updateUserSchema = exports.createUserSchema.partial();
//# sourceMappingURL=user.validator.js.map
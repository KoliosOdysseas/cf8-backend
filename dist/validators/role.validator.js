"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoleSchema = exports.createRoleSchema = void 0;
const zod_1 = require("zod");
exports.createRoleSchema = zod_1.z.object({
    role: zod_1.z.string().min(4),
    description: zod_1.z.string().optional(),
    active: zod_1.z.boolean().optional()
});
exports.updateRoleSchema = exports.createRoleSchema.partial();
//# sourceMappingURL=role.validator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    role: { type: String, required: true, unique: true },
    description: { type: String },
    active: { type: Boolean, default: true }
}, {
    collection: "roles",
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Role", RoleSchema);
//# sourceMappingURL=role.model.js.map
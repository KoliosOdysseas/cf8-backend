"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PhoneSchema = new mongoose_1.Schema({
    type: String,
    number: String
});
const AddressSchema = new mongoose_1.Schema({
    area: String,
    street: String,
    number: String,
    po: String,
    municipality: String
});
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, "Username is required field"],
        unique: true,
        max: 20,
        min: 4,
        trim: true,
        lowercase: true
    },
    password: { type: String, required: true },
    firstname: String,
    lastname: { type: String },
    email: { type: String, index: true },
    // address : {
    //   area: String,
    //   street: String,
    //   number: String,
    //   po: String,
    //   municipality: String
    // },
    address: AddressSchema,
    phone: { type: [PhoneSchema], null: true },
    roles: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Role", required: true }]
}, {
    collection: "users",
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=user.model.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./utils/db");
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 3000;
const start = async () => {
    await (0, db_1.connectDB)();
    app_1.default.listen(port, () => {
        console.log("Server is up on: ", port);
    });
};
start();
//# sourceMappingURL=server.js.map
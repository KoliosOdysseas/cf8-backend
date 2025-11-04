"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
(0, swagger_1.setupSwagger)(app);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use('/api/users', user_routes_1.default);
app.use('/api/roles', role_routes_1.default);
app.use('/api/auth', auth_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
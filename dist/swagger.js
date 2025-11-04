"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const mongoose_to_swagger_1 = __importDefault(require("mongoose-to-swagger"));
const role_model_1 = __importDefault(require("./models/role.model"));
const user_model_1 = __importDefault(require("./models/user.model"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Users Backend API",
            version: "1.0.0",
            description: "Api for Users written in typescript"
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Local Server"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            },
            "schemas": {
                User: (0, mongoose_to_swagger_1.default)(user_model_1.default),
                Role: (0, mongoose_to_swagger_1.default)(role_model_1.default)
            }
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./src/routes/*.ts']
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(exports.swaggerSpec));
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map
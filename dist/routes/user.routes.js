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
const express_1 = require("express");
const userCtrl = __importStar(require("../controllers/user.controller"));
const validate_middleware_1 = require("../middlewares/validate.middleware");
const validateObjectId_middleware_1 = require("../middlewares/validateObjectId.middleware");
const user_validator_1 = require("../validators/user.validator");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_middleware_1 = require("../middlewares/user.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /users:
 *  get:
 *    summury: List of all users
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Response list of users
 */
router.get("/", auth_middleware_1.authenticate, userCtrl.list);
router.get('/:id', user_middleware_1.hasAdminRole, (0, validateObjectId_middleware_1.validateObjectId)('id'), userCtrl.getOne);
/**
 * @openapi
 * /users:
 *  post:
 *    summary: Creates a user
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              firstname:
 *                type: string
 *              lastname:
 *                type: string
 *              email:
 *                type: string
 *    responses:
 *      201:
 *        description: User created
 */
router.post("/", auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(user_validator_1.createUserSchema), userCtrl.create);
router.put('/:id', auth_middleware_1.authenticate, (0, validate_middleware_1.validate)(user_validator_1.updateUserSchema), (0, validateObjectId_middleware_1.validateObjectId)('id'), userCtrl.update);
router.delete('/:id', auth_middleware_1.authenticate, (0, validateObjectId_middleware_1.validateObjectId)('id'), userCtrl.remove);
exports.default = router;
//# sourceMappingURL=user.routes.js.map
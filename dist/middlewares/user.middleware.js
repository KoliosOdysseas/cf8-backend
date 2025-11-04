"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAdminRole = void 0;
const hasAdminRole = (req, res, next) => {
    try {
        const checkAdminRole = req.user.roles.some((r) => r.role === 'ADMIN' && r.active);
        if (!checkAdminRole) {
            console.log("Forbidden: Insufficient permissions");
            res.status(403).json({ message: "Forbidden: Insufficient permissions" });
        }
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Not Admin role' });
    }
};
exports.hasAdminRole = hasAdminRole;
//# sourceMappingURL=user.middleware.js.map
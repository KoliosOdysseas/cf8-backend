"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    try {
        const toValidate = {
            body: req.body,
            query: req.query,
            params: req.params
        };
        schema.parse(toValidate.body);
        next();
    }
    catch (err) {
        return res.status(400).json({ message: "Problem in form data", error: err });
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.middleware.js.map
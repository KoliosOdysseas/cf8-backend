import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { loginSchema } from "../validators/auth.validator";

import bcrypt from "bcrypt";
import User from "../models/user.model";

const router = Router();

/**
 * DEV route – φτιάχνει ή ενημερώνει τον admin χρήστη.
 * Username: admin
 * Password: 12345
 */
router.post("/dev-create-admin", async (req, res) => {
  try {
    const username = "admin";
    const email = "admin@example.com";
    const plainPassword = "12345";

    const hashed = await bcrypt.hash(plainPassword, 10);

    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({
        username,
        email,
        password: hashed,
        roles: [],
      });

      return res.status(201).json({ message: "Admin created", user });
    }

    user.email = email;
    user.password = hashed;
    await user.save();

    return res.status(200).json({ message: "Admin updated", user });
  } catch (err) {
    console.error("DEV CREATE ADMIN ERROR:", err);
    return res
      .status(500)
      .json({ message: "Error creating/updating admin", error: err });
  }
});

/**
 * @openapi
 * /api/auth/login:
 *  post:
 *    summary: Login user
 *    tags: [Auth]
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
 *    responses:
 *      200:
 *        description: Success Login
 *      401:
 *        description: Failure in login
 */
router.post("/login", validate(loginSchema), authCtrl.login);

export default router;

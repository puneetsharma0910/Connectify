import { Router } from "express";

import usercontroller from "../controllers/user.controller.js";
const router = Router();
router.route("/login").post(usercontroller.login);
router.route("/register").post(usercontroller.register);
router.route("add_to_activities");
router.route("/get_all_activities");
export default router;

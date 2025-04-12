import { Router } from "express";
const router = Router();
router.route("/").get((req, res) => {
  res.send("hi there");
});
router.route("/register")
router.route("add_to_activities")
router.route("/get_all_activities")
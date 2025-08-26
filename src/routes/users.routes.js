import { Router } from "express";
import { getUsers } from "../controllers/users.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("home")
});

router.get("/users", getUsers);

export default router;
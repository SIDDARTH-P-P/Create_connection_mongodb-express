import { Router } from "express";
import * as fun from "./route_handler.js"; 

const router = Router();

router.route("/api").post(fun.data)

export default router;
import { Router } from "express";
import postRouter from "./post.route";

const router = Router();

router.use("/posts", postRouter);

export default router;

import { Router } from "express";
import {
    createPostHandler,
    getAllPostsHandler,
    getPostHandler
} from "../controllers";

const router = Router();

router.post("/", createPostHandler);
router.get("/:postId", getPostHandler);
router.get("/", getAllPostsHandler);

export default router;

import { Request, Response } from "express";
import { BaseResponse, GetAllPostsResult, GetPost } from "../schema";

export async function createPostHandler(
    req: Request,
    res: Response<BaseResponse>
) {
    const msg = req.body;
    console.dir(msg);
    return res.status(201).json({
        ok: true,
        message: "Message received successfully",
        data: { message: { ...msg } }
    });
}

export async function getPostHandler(
    req: Request<GetPost["params"]>,
    res: Response<GetPost["response"]>
) {
    return res.status(200).json({
        ok: true,
        message: "OK",
        data: {
            post: {
                id: req.params.postId,
                isPublished: false,
                title: "My First Post"
            }
        }
    });
}

export async function getAllPostsHandler(
    _req: Request,
    res: Response<GetAllPostsResult>
) {
    return res.status(200).json({
        ok: true,
        message: "OK",
        data: {
            posts: []
        }
    });
}

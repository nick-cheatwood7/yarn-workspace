import { z } from "zod";
import { baseResponseSchema } from "./response.schema";

export const postSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    isPublished: z.boolean().default(false)
});

export const createPostSchema = z.object({
    title: z.string({
        required_error: "title is required"
    }),
    isPublished: z.boolean().optional().default(false)
});

export const createPostResultSchema = baseResponseSchema.extend({
    data: z.object({
        post: postSchema.nullable()
    })
});

export const getPostSchema = z.object({
    params: z.object({
        postId: z.string({ required_error: "postId is required" }).uuid()
    }),
    response: createPostResultSchema.extend({})
});

export const getAllPostsResultSchema = baseResponseSchema.extend({
    data: z.object({
        posts: z.array(postSchema)
    })
});

export type Post = z.TypeOf<typeof postSchema>;
export type PostInput = z.TypeOf<typeof createPostSchema>;
export type CreatePostResult = z.TypeOf<typeof createPostResultSchema>;
export type GetPost = z.TypeOf<typeof getPostSchema>;
export type GetAllPostsResult = z.TypeOf<typeof getAllPostsResultSchema>;

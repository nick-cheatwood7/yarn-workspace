import { z } from "zod";

export const baseResponseSchema = z.object({
    ok: z.boolean().default(true),
    message: z.string(),
    data: z.object({}).optional()
});

export type BaseResponse = z.TypeOf<typeof baseResponseSchema>;

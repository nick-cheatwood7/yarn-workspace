import express, { Response } from "express";
import { BaseResponse } from "./src/api/schema";
import { name as packageName } from "./package.json";

const app = express();
const port = 4000;

app.get("/", (_req, res: Response<BaseResponse>) => {
    res.status(200).json({ ok: true, message: `Hello from ${packageName}` });
});

app.listen(port, () => {
    console.log(`✨ Express server listening at http://localhost:${port}`);
});

export * from "./src/api/schema";

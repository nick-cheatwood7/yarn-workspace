import express from "express";
import routes from "./api/routes";
import cors from "cors";

const app = express();
const port = 4000;

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);
app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
    console.log(`✨ Express server listening at http://localhost:${port}`);
});

import express from "express";
import { apiRouter } from "./routes/index.js"

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", apiRouter);

app.use("*", (req, res) => {
    res.status(404).send(`404 Not found \n page ${req.baseUrl} not found`)
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
    res.json({
        status: 500,
        error: "INTERNAL_SERVER_ERROR",
        message: err.message || "view console"
    })
})

export default app

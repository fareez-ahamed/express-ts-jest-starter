import express from "express";

const app = express();

app.get("/", (req, res) => res.send({ message: "Alhamdhulillah" }));

export default app;

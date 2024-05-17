import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { json } from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("My first route ");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


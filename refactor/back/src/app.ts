import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.send("Tamo na raiz");
});
export default app;

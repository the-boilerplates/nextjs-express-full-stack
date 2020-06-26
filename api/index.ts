import { Router, Request, Response } from "express";

const api = Router();

api.get("/health-check", (req: Request, res: Response) => {
  res.status(200);
  res.send("All Okay!");
});

export default api;

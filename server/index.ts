import express, { Request, Response } from "express";
import next from "next";

import apiHandler from "../api";

const PORT: number = parseInt(process.env.PORT, 10) || 3000;

const dev: boolean = process.env.NODE_ENV !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api", apiHandler);

  server.all("*", (req: Request, res: Response) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

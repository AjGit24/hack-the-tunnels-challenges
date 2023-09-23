import express, { Request, Response } from "express";
import { AccountRouter, ProductRouter } from "./routes";

const router = express.Router();

const getAPIRoot = async (_: Request, response: Response) => {
  response.json({
    message: "API - 👋",
  });
};

router.get("/", getAPIRoot);
router.use("/", AccountRouter);
router.use("/products", ProductRouter);

export default router;

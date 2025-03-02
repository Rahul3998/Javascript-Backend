import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// cors policy configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// major configurations
// 1. Express JSON
app.use(express.json({ limit: "16kb" }));
// 2. Express url encoding
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// 3. Express static file
app.use(express.static("public"));
// 4. Cookie Parser
app.use(cookieParser());

export default app;

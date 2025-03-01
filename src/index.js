// require("dotenv").config({ path: "./env" });
import connectDB from "./database/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB();

/* First Approach
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("errror", (error) => {
      console.log("ERRR:: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Serving on http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.log("ERROR:: ", err);
    throw err;
  }
})();
*/

// require("dotenv").config({ path: "./env" });
import app from "./app.js";
import connectDB from "./database/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Conneection Error..! ", error);
  });

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

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import mysql from "mysql2";

// Create connection configuration
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Your MySQL host
  user: process.env.DB_USER, // Your MySQL username
  password: process.env.DB_PASSWORD, // Your MySQL password
  database: process.env.DB_NAME, // Your database name
});

const connectDB = async () => {
  try {
    // Connection Using Local Database
    const connectionInstance = await connection.connect((error) => {
      if (error) {
        console.log("Connection Error :: ", error);
      } else {
        console.log("Connection Successful");
      }
      connection.end();
    });

    // Connection using MongoDB
    // const connectionInstance = await mongoose.connect(
    //   `${process.env.MONGODB_URI}/${DB_NAME}`
    // );
    // console.log(
    //   `Connection Successfull..! Connection Host :: ${connectionInstance.connection.host}`
    // );
  } catch (error) {
    console.log("CONNECTION ERROR :: ", error);
    process.exit(1);
  }
};

export default connectDB;

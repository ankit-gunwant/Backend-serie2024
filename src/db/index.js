import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/$ {DB_NAME}`)
      
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGODB connection FAILED", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;

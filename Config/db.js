import mongoose from "mongoose";

const connection = async () => {
  // mongoose.set('strictQuery', false);
  URL = process.env.DATABASE_URL;
  await mongoose.connect(URL);
};

export default connection;

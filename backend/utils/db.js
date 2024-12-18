import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        console.log("Connecting to DB...")
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
};
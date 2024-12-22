import mongoose from "mongoose";

export async function connectDatabase() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/adoptme")
        console.log(`MongoDB connected successfully`)
    } catch (error) {
       console.log(`Error to connect Mongo Database: `, error.message) 
       throw error
    }
}
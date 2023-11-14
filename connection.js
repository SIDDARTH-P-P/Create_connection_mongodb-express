import mongoose from "mongoose";

export default function MongoConnection(){
    return mongoose.connect(process.env.DB_URL);
}
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    data:{type:String},
});

export default mongoose.model.Todos || mongoose.model("Todo",schema)
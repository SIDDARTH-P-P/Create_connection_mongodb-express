import express from "express";
import router from "./path.js";
import dotenv from "dotenv";
import MongoConnection from "./connection.js";


dotenv.config();
const app = express();

app.use(express.urlencoded({extended:true}))
app.use("/",router);
app.use("/",express.static("./template"));



MongoConnection().then(()=>{
    app.listen(process.env.PORT,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("server start");
    })
})
.catch((error)=>{
    console.log(error);
})
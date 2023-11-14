import schema from "./schema/schema.js";
export async function data(req,res){
    console.log(req.body);
    let {data} = req.body;
    let dt = await schema.create({data})
    res.json("handler");
}
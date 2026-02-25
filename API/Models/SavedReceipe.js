import mongoose from "mongoose";

const savedreceipe_schema=new mongoose.Schema({
    receipe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"receipe"
    }
})

export const savedReceipe=mongoose.model("savedReceipe",savedreceipe_schema)
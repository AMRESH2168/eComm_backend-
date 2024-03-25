/**
 * 
 * name,description of category
 */

const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema ({
    name:{

        type:String,
        required:true,
        unique:true,



    },
  description:{

    type:String,
    required:true,

  }





},{timestamps:true,versionKey:false})

 mongoose.model("category",categorySchema)
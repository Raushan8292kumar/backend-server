//Creating a modle for mongoose
const mongoose=require("mongoose")

const noteschema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// create a model and export so other file can use
module.exports = mongoose.model("Note",noteschema)
//here we use module for exports to another file according to needed
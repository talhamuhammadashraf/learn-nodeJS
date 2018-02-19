var mongoose  = require("mongoose");
var Schema = mongoose.Schema;


var bookModel =new Schema({
    name:{type:String,minlength:5,maxlength:12,unique:true},
    author:String,
    published:{type:Boolean,required:true},
    detail:{
        price:{type:Number,min:10,max:5000},
        pages:{type:Number,min:40,max:1000}
    },
    old:Boolean
})
module.exports = mongoose.model("bookModel",bookModel)
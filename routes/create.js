var express = require("express");
var Create  = express.Router();
var bookModel = require("../model/book.model.js");
// var bodyParser = require("body-parser");
console.log("bookModel",bookModel)
Create.post('/',(req,res,next)=>{
        console.log("ye hai ",req.body)
    var saveData=new bookModel({
        name :req.body.name,
        author:req.body.author,
        published:req.body.published,
        detail:{
            price:req.body.price,
            pages:req.body.pages
        },
        old:req.body.old,
    });
    saveData.save((error,data)=>{
        if(!error){
            console.log(data)
            res.json(data)
        }
        else{
            console.log("error",error)
        }
    })
})
module.exports = Create
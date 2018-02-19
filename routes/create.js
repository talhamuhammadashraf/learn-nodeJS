var express = require("express");
var Create  = express.Router();
var bookModel = require("../model/book.model.js");

Create.post('/',(req,res,next)=>{
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
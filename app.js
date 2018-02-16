var express =require("express");

var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.urlencoded({extended:false}))


app.listen("8000",()=>{console.log("server running")})
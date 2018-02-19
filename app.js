var express =require("express");
var Create = require("./routes/create");
var Delete = require("./routes/delete");
var Search = require("./routes/search")
var Update = require("./routes/update")
var bodyParser = require("body-parser");
var mongoose = require("mongoose")


//-----------------------------------------------------
mongoose.connect("mongodb://talhaah:123456@ds131687.mlab.com:31687/exp",(error)=>{
    if(error){console.log("error",error)}
    else{console.log("connected")}    
})
//------------------------------------------------------
var app =express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())






//-------------Routes----------------------------
app.use('/create',Create)
app.use("/search",Search)
app.use("/update",Update)
app.use("/delete",Delete)

app.listen("8000",()=>{console.log("server running")})
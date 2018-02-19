var express = require("express");
var Search = express.Router();
var bookModel = require("../model/book.model.js")

console.log("bookModel",bookModel)

Search.post("/", (req, res, next) => {
    bookModel.find({
        // name: req.body.keyword,
        published:req.body.keyword
    }, () => { console.log("found") })
        .exec((error, book) => {
            console.log("book", book)
            if (!error) {
                console.log("no error")
                res.json(book)
            }
            else { res.send("not found") }
        })
})

module.exports = Search

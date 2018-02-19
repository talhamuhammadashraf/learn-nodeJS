var express = require("express");
var Delete =express.Router();
var bookModel = require("../model/book.model")

Delete.post('/', (req, res) => {
    bookModel.findByIdAndRemove({
        _id: req.body._id
    }, (error, response) => {
        if (!error) {
            res.json(response)
        }
        else { res.send("error", error) }
    }
    )
}
)
module.exports = Delete
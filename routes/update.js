var express = require("express");
var Update =express.Router();
var bookModel = require("../model/book.model")

Update.post('/', (req, res) => {
    bookModel.findOneAndUpdate({
        _id: req.body._id
    },
        {
            name: req.body.name
        }, (error, response) => {
            if (!error) {
                res.json(response)
            }
            else { res.send("error", error) }
        }
    )
}
)
module.exports = Update
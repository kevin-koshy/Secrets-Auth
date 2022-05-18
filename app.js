const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
});
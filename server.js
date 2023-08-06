const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended:true}));

const fulldate = new Date();
const date = fulldate.getDate();
const month = fulldate.getMonth()+1;
const year = fulldate.getFullYear();

app.get("/",function(req,res) {
    res.render("index.ejs", {
        today: date,
        month: month,
        year: year,
    });
    
})

app.listen(3000,() => {
    console.log("Server started");
})

app.post("/home",function(req,res) {
    res.render("index.ejs",{
        today:date,
        month: month,
        year: year,
    });
})

app.post("/work",function(req,res) {
    res.render("work.ejs");
})

app.post("/form", function (req, res) {
    const name = req.body.todoname;
    console.log(name);
    res.render({name});
});


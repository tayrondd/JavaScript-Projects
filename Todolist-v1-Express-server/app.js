const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let worklist = [];

app.set("view engine", "ejs"); // setup to use ejs library with express.
app.use(express.static("public")); //this line make files in public folder able to be use to anyone using our web
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    //console.log(req.body);
    if (req.body.list === "Work") {
        worklist.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

//work-list
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work list", newListItems: worklist });
});

app.post("/work", function (req, res) {
    res.redirect("/work");
});

//about
app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/about", function (req, res) {
    res.redirect("/about");
});

app.listen(3000, function () {
    console.log("Server is running at port 3000");
    console.log("http://localhost:3000/");
});

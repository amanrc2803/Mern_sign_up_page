const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var item= "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {


    var today = new Date();
    var options ={
        weekday:"long",
        day : "numeric",
        month:"long"
    }
    
    var day = today.toLocaleString("en-US", options);

    /*var currentDay = today.getDay();

    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thirsday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: curent day is equal to :" + currentDay);    
    } 
/*
    if (currentDay === 6 || currentDay === 0) {
        day = " Weekend";

        //res.sendFile(__dirname +"/weekend.html");
    } else {
        day = "weekday";
        //res.sendFile(__dirname +"/weekday.html");
    }
*/
    res.render("list", { kindofDay: day, newListItem: item })

});


app.post("/", function(req,res){
    var item = req.body.newItem;
   // console.log(item);

   res.redirect("/");
});



app.listen("3000", function () {
    console.log("Server started on port 3000");
});
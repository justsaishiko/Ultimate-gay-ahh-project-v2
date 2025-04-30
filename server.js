const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path");
const { handlebars } = require('hbs');

app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({ 
    defaultLayout: 'base.hbs',
    extname: '.hbs',
    partialsDir  : [
        path.join(__dirname, '/views/partials'),
    ]

}));

app.set('view engine', 'hbs');

app.get("/", function (req, res) {
    res.render('main.hbs');
})





app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})


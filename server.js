const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path");
const { handlebars } = require('hbs');
const context = require("./public/data/genshin-characters.json")

app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({ 
    defaultLayout: 'base.hbs',
    extname: '.hbs',
    partialsDir  : [
        path.join(__dirname, '/views/partials'),
    ],
    helpers: {
        json: function(context) {
            return JSON.stringify(context);
        }
    }

}));

app.set('view engine', 'hbs');

app.get("/", function (req, res) {
    const dane = {
        genshinCharacters: context.genshinCharacters,
    };

    res.render('main.hbs', dane);
})









app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})


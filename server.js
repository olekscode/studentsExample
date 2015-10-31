var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.post("/login", function (req, res) {
    res.send('success');
    //res.send(500, { error: "hi, there was an error" });
})

app.post("/newphrase", function (req, res) {
    res.send('success');
    //res.send(500, { error: "hi, there was an error" });
})

app.post("/changephrase", function (req, res) {
    res.send('change');
    //res.send(500, { error: "hi, there was an error" });
})



/* serves main page */
app.get("*", function (req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});

app.listen(3000);
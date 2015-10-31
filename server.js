/* global res */
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://elythingol:valakventa22@ds052408.mongolab.com:52408/codephareses');

var PhraseSchema = new mongoose.Schema({
     phrase: String
 });
 
 var Phrase = db.model('pharases', PhraseSchema);
  
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
})); 

app.post("/login", function (req, res) {    
     Phrase.findOne({ "phrase": req.body.phrase})
     .exec(function(err, doc){             
       if (!(doc || err)) {
           res.status(500).send({error: "hi, there was an error" });          
       } else {
             res.send(doc.get('phrase'))
       }
 })    
})

app.post("/newphrase", function (req, res) {    
    var newPhrase = new Phrase(req.body);
    newPhrase.save(function (err, product) {
         if (err) {
             res.status(500).send({ error: "hi, there was an error" });
         } else {
             res.send(product.get('phrase'))
         }
})
    
})

app.post("/changephrase", function (req, res) { 
Phrase.findOneAndUpdate(req.body.oldphrase, req.body.newphrase, {new :true}).exec(function(err, doc){
    if (err || !doc){
         res.status(500).send({ error: "hi, there was an error" }); 
    } else {
        res.send(doc.get('phrase'))
    }
})    
   
  
})



/* serves main page */
app.get("*", function (req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});

app.listen(3000);
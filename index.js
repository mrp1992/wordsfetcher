var express = require('express');
var readYaml = require('read-yaml');
var app = express();

app.get('/words.json', function (req, res) {
    if(!req.query.stringVar) {
       res.status(400).send({Message: "Missing value of stringVar",
    code: "400 Bad request"});
    throw new Error("Error: Bad Request missing stringVar value").message;
    } 
 
    var stringVar = req.query.stringVar;
 
    var wordList = readYaml.sync('words.yml').words;
    var containWordsList = [];
    wordList.forEach(word => {
       if(word.toLowerCase().includes(stringVar.toLowerCase())) {
          containWordsList.push(word);
       }
    });
 
    res.send({words: containWordsList});
 })

 module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res){
    res.send("hello");
})


app.listen(3000, function(){
    console.log('the program is live on port 3000');
})
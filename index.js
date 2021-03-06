var express = require('express');
var app = express();
var PORT = 3000;
  
// Without middleware
app.get('/', function(req, res){
    res.redirect('https://www.kivaliving.com');
});

app.get('/caseform', function(req, res){
    res.redirect('https://www.kivaliving.com/cases');
});

app.get('/appform', function(req, res){
    res.redirect('https://www.kivaliving.com/appform');
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
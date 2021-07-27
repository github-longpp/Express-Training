var express = require('express');

var app = express();
app.use(express.static('static'))
app.get('/Ex2', function(req, res) {
    res.send('Home page')
});

app.get('/Ex2/users', function(req, res) {
    res.send('User list')
});

app.get('/Ex2/admins', function(req, res) {
    res.send('Admin list')
});

app.get('/Ex2/HTML-Referrence', function(req, res) {
    res.sendFile(__dirname + "/" + "static/ex1.html")
})

app.listen(3000, function() {
    console.log('Node app is running on port 3000')
});
module.exports = app;
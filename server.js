var port = 3000;
var express = require('./config/express');
var app = express();
app.listen(port);
module.exports = app;
console.log('Personal Website running at http://localhost:' + port);
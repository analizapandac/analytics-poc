const express = require('express');
const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/'));

app.listen(PORT);

console.log(`Listening at http://localhost:${PORT}`)
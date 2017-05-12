const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    let index = path.join(__dirname + '/index.html');
    res.sendFile(index);
});

app.listen(port);

console.log('Server started at ', port);
const express = require('express');
const compression = require('compression');
const path = require('path');

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';

const app = express();

app.use(compression());
app.use('/public', express.static('public'));

app.get('*', function (req, res, next) {
  if (
    req.headers['x-forwarded-proto'] !== 'https' &&
    env === 'production'
  ) {
    res.redirect('https://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.get('*', (req, res) => {
    let index = path.join(__dirname + '/index.html');
    res.sendFile(index);
});



app.listen(port);

console.log('Server started at ', port);
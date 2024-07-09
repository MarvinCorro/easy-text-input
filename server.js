// server.js

// set up ============================================
const express = require('express');
const bodyParser = require('body-parser');
const enforce = require("express-sslify");
const compression = require('compression');

// Init App
const app = express();

// Compress all responses
app.use(compression());

// redirect http requests to https
if (process.env.NODE_ENV === 'production')
    app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Support webpack-dev-server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// Body Parser Middleware
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended:true
}));

// Set Static Folder
app.use(express.static('./*.html'));
app.use(express.static('dist'));

//------------------------------------------------------------------//
// Set Port
app.set('port', process.env.PORT || 3000);

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

// Launch
app.listen(app.get('port'), () => {
    console.log('Server.js started listening on port ' + app.get('port'));
});

module.exports = app;
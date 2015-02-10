/**
 * Created by capaj on 10/02/15.
 */
var port = 8983;
var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static('./examples/'));
app.use(express.static('./'));

app.listen(port).on('listening', function() {
	console.log("server started");
});

module.exports = app;
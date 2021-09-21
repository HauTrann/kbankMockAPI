'use strict';

var mockapi = require('mockapi');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var routes = mockapi.routes('routes', __dirname);

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(mockapi.middleware.forceJsonResponse());

var link = '/v1/vietnam/corebank/';
// api routes
app.post(link + 'getlistofaccountcasa', routes.getlistofaccountcasa.get);
app.post(link + 'getaccountinfo', routes.getaccountinfo.get);
app.post(link + 'getcustomerinfo', routes.getcustomerinfo.get);
app.post(link + 'getaccountactivitypaymentdeposit', routes.getaccountactivitypaymentdeposit.get);

app.use(mockapi.middleware.notFoundHandler());
app.use(mockapi.middleware.errorHandler(app.get('env')));

app.listen(app.get('port'), function() {
  console.log('Mock API server listening on port ' + app.get('port'));
});

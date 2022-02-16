'use strict';

var mockapi = require('mockapi');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var routes = mockapi.routes('routes', __dirname);

app.set('port', process.env.PORT || 3200);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(mockapi.middleware.forceJsonResponse());

var link = '/v1/vietnam/corebank/';
var link_KH = '/v1/banks/';
var link_VN_PHP = '/v1/vietnam/iph/';
var link_VN_Sanc = '/v1/vietnam/sanction/';
// api routes
app.post(link + 'getListOfAccount', routes.getlistofaccountcasa.get);
app.post(link + 'getAccountInfo', routes.getaccountinfo.get);
app.post(link + 'getCustomerInfo', routes.getcustomerinfo.get);
app.post(link + 'getAccountActivityPaymentDeposit', routes.getaccountactivitypaymentdeposit.get);
app.post(link + 'getExchangeRate', routes.getexchangerate.get);

app.post(link_VN_PHP + 'bankList/citad/bankList', routes.bankList.get);
app.post(link_VN_PHP + 'bankList/citad/branchList', routes.branchList.get);
app.post(link_VN_PHP + 'bankList/napas/bankCard', routes.bankCard.get);
app.post(link_VN_PHP + 'bankList/napas/bankAccount', routes.bankAccount.get);
app.post(link_VN_PHP + 'transferK2Other/verify/KtoNapas', routes.VerifyNapas.get);
app.post(link_VN_PHP + 'fee/getFeeAmount', routes.FeeAmount.get);
app.post(link_VN_Sanc + 'status/json', routes.Sanction.get);

app.post(link_KH + 'customer/SearchCustomerByCode', routes.SearchCustomerByCode.get);
app.post(link_KH + 'deposit/GetAccountByCustomer', routes.GetAccountByCustomer.get);
app.post(link_KH + 'deposit/GetExchangeRate', routes.GetExchangeRateKH.get);
app.post(link_KH + 'credit/GetLoanAccountByCustomer', routes.GetLoanAccountByCustomerKH.get);
app.post(link_KH + 'deposit/SearchAccount', routes.SearchAccount.get);
app.post(link_KH + 'deposit/GetAccountHistory', routes.SearchAccount.get);

app.use(mockapi.middleware.notFoundHandler());
app.use(mockapi.middleware.errorHandler(app.get('env')));

app.listen(app.get('port'), function() {
  console.log('Mock API server listening on port ' + app.get('port'));
});

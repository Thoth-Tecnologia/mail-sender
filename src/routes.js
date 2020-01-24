const { Router } = require('express');
const routes =  Router();
const mailSender  = require('./controller/mailsender');

routes.post('/mail', mailSender.sendmail);

 module.exports = routes;
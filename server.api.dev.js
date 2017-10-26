const express = require('express')
const http = require('http')

/**
 * server: api
 * responsibility: proxi api requests to cbr.ru to handle CORS restriction
 */
const api = express()

/**
 * Provide currencies general data (name, nomination e.t.c.)
 */
api.get('/api/currencies/list', (req, res) => {
  http.request('http://www.cbr.ru/scripts/XML_val.asp?d=0', function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
})

/**
 * Provide currencies rates
 */
api.get('/api/currencies/rates', (req, res) => {
  http.request('http://www.cbr.ru/scripts/XML_daily_eng.asp?', function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
})

api.listen(8081, function () {
  console.log('api server listening on port 8081')
})
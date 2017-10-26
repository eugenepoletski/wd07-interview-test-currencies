const express = require('express')
const http = require('http')
// Create distinct servers for static and api
const app = express()
const api = express()

/**
 * server: app
 * responsibility: serve local static
 */
app.use(express.static('dist'))
app.use(express.static('assets'))

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

/**
 * server: api
 * responsibility: proxi api requests to cbr.ru to handle CORS restriction
 */
api.get('/api/currencies/list', (req, res) => {
  http.request('http://www.cbr.ru/scripts/XML_val.asp?d=0', function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
  }).end();
})

api.listen(8081, function () {
  console.log('Example api server listening on port 8081')
})
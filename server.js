const express = require('express')
const http = require('http')
const app = express()

app.use(express.static('dist'))
app.use(express.static('assets'))

app.get('/api/currencies', (req, res) => {
  http.request('http://www.cbr.ru/scripts/XML_val.asp?d=0', function(response) {
    response.pipe(res)
  }).on('error', function(e) {
    res.sendStatus(500)
  }).end()
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
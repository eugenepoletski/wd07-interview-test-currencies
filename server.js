const express = require('express')
const app = express()

app.use(express.static('dist'))
app.use(express.static('assets'))

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
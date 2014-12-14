var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World from workout app!')
})

var server = app.listen(8002, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
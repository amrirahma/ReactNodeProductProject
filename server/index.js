var express = require('express')
var app = express()
var port = 5000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/getAll', function (req, res) {
    res.send('Hello Worldddd !')
  })

app.listen(port, () => console.log('Exemple app port'));


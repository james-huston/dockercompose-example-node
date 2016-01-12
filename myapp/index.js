/* global process */
'use strict';

let express = require('express');
let app = express();
let redis = require('redis');
let myConn = redis.createClient(6379, 'redis-server');

myConn.set('blarg', 'whoops');

app.get('/', function (req, res) {
  myConn.get('blarg', function (err, result) {
    res.send(result);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

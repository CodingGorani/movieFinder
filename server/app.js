var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./router/index');

app.listen(3030, () => {
  console.log('start express server on http://localhost:3030');
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

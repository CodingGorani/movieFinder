var express = require('express');
var app = express();
var router = express.Router();
var movies = require('./naverAPIRequest/index');

router.use('/movies', movies);

module.exports = router;

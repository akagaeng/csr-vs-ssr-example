var express = require('express');
var router = express.Router();

router.get('/ssr', function(req, res, next) {
  res.render('index', { title: 'Hello SSR!' });
});

router.get('/csr', function(req, res, next) {
  res.send('Hello CSR!');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var EXJSON = require('./EXJSON.js');
var IphoneSearchCrlt = require('../control/IphoneSearchCrlt.js');


// middleware specific to this router
router.use(function timeLog(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var fullAgent = req.headers['user-agent'];
  var paramter = req.query;
  console.log('User ip: ' + ip + ', agent: ' + paramter.agent +  ', Time: ' + Date());
  next();
});

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a search');
  switch (req.query.agent) {
    case 'iphone':
    console.log('iphone');
    IphoneSearchCrlt.search(req, res);
      break;

    case 'android':
    console.log('android');
    res.send(EXJSON.topHint);
      break;

    default:
    console.log('web device');
    res.send(EXJSON.topHint);

  };

});

//define top search hint
router.get('/searchHint', function(req, res) {
  console.log('search hint ');
  switch (req.query.agent) {
    case 'iphone':
    console.log('iphone');
    IphoneSearchCrlt.searchHint(req, res);
      break;

    case 'android':
    console.log('android');
    res.send(EXJSON.topHint);
      break;

    default:
    console.log('web device');
    res.send(EXJSON.topHint);

  };

});


module.exports = router;

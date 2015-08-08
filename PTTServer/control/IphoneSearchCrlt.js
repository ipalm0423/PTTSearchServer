var EXJSON = require('../routes/EXJSON.js');


function search(req, res) {
  var parameters = req.query;
  console.log(parameters.hint);
  res.send(EXJSON.searchResult);
};

function searchHint(req, res) {
  var parameters = req.query;
  console.log(parameters.hint);
  res.send(EXJSON.topHint);
};

function searchProfile(req, res) {
  var parameters = req.query;
  console.log(parameters.hint);
  //calculate

  //send profile
  res.send(EXJSON.profileEX);
  console.log(EXJSON.profileEX.lastOnline);
};

function searchArticle(req, res) {
  var parameters = req.query;
  var counts = parameters.counts;
  var hint = parameters.hint;
  // scope = account", "all", "single"
  var scopes = parameters.scopes;
  var startCount = parameters.startCount;
  console.log(parameters.hint);
  //calculate

  //send profile
  res.send(EXJSON.titles);
};

function searchPush(req, res) {
  var parameters = req.query;
  var counts = parameters.counts;
  var hint = parameters.hint;
  // scope = account", "all", "single"
  var scopes = parameters.scopes;
  var startCount = parameters.startCount;
  console.log(parameters.hint);
  //calculate

  //send profile
  res.send(EXJSON.pushes);
};



exports.search = search;
exports.searchHint = searchHint;
exports.searchProfile = searchProfile;
exports.searchArticle = searchArticle;
exports.searchPush = searchPush;

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





exports.search = search;
exports.searchHint = searchHint;

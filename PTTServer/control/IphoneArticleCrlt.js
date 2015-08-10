var EXJSON = require('../routes/EXJSON.js');


function uid(req, res) {
  var parameters = req.query;
  console.log(parameters.hint);
  res.send(EXJSON.articleEX);
};

function titleByUid(req, res) {
  var parameters = req.query;
  console.log(parameters.hint);
  res.send(EXJSON.titleEX);
};



exports.uid = uid;
exports.titleByUid = titleByUid;

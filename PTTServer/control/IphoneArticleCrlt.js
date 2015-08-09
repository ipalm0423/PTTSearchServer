var EXJSON = require('../routes/EXJSON.js');


function uid(req, res) {
  var parameters = req.query;
  console.log(parameters.hint);
  res.send(EXJSON.articleEX);
};





exports.uid = uid;

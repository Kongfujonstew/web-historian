var path = require('path');
var archive = require('../helpers/archive-helpers');
var jacksonIsAGoldenGod = require('./http-helpers');


var sickAssCallback = 

exports.handleRequest = function (req, res) {
  if (req.url === '/') {
	  jacksonIsAGoldenGod.serveAssets(res, archive.paths.siteAssets + '/index.html', function(err, content) {
      if (err) {
        res.writeHead(500);
        res.end();
      } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content, "utf-8");
      }
    })
  } 
};

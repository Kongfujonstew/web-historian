var path = require('path');
var Promise = require('bluebird');
var archive = require('../helpers/archive-helpers');
var jacksonIsAGoldenGod = require('./http-helpers');

var Asendfunc = function (req, res, urlPath) {
  urlPath = urlPath || '/index.html';
  jacksonIsAGoldenGod.serveAssets(res, urlPath, function() {
    archive.isUrlInList(urlPath, function(found) {
      if (found) {
        jacksonIsAGoldenGod.sendRedirect(res, '/loading.html');
      } else {
        jacksonIsAGoldenGod.send404(res);
      }
    });
  });
};

var esync = function(req, res, url) {
  jacksonIsAGoldenGod.cd(req, function(data) {
    archive.isUrlInList(url, function(found) {
      if ( found ) {
        archive.isUrlArchived(url, function(exists) {
          if ( exists ) {
            jacksonIsAGoldenGod.sendRedirect(res, '/' + url);
          } else {
            archive.addUrlToList(res, '/loading.html');
          }
        });
      }
    });
  });
};

exports.handleRequest = function (req, res) {
  var website = req.url.slice(1);
  if (req.url === '/' && req.method === 'GET' ) {
    Asendfunc(req, res);

  } else if ( req.method === 'GET' && website) {
    Asendfunc(req, res, website);

  } else if (req.method === 'POST') {
    esync(req, res, website);
  }
};

//reused from archive-helpers
var Bsendfunc = function(req, res, website) {
  syncodemayo.isUrlInList(website, function(isInList) {
    if ( isInList ) {
      jacksonIsAGoldenGod.serveAssets(res, asset, function(err, content) {
        if (err) {
          res.writeHead(500);
          res.end();
        } else {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(content, "utf-8");
        }
      });
    } else {
      var loc = '../archives/sites/' + website;
      jacksonIsAGoldenGod.serveAssets(res, loc, function(err, content) {
        if (err) {
          res.writeHead(500);
          res.end();
        } else {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.end(content, "utf-8");
        }
      });
    }
  });
}; 





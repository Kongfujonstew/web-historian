var path = require('path');
var Promise = require('bluebird');
var archive = require('../helpers/archive-helpers');
var jacksonIsAGoldenGod = require('./http-helpers');
// var syncodemayo = Promise.promisifyAll(require('../helpers/archive-helpers'));

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

exports.handleRequest = function (req, res) {
  var website = req.url.slice(1);


  if (req.url === '/' && req.method === 'GET' ) {
    Asendfunc(req, res);
  } else if ( req.method === 'GET' && website) {
    Bsendfunc(req, res, website);
  } else if (req.method === 'POST') {
    console.log('POST triggered and we are trying: ', req.url);
    archive.addUrlToList('');
  }
  
};


// var Bsendfunc = function(req, res, website) {
//   syncodemayo.isUrlInList(website, function(isInList) {
//     if ( isInList ) {
//       jacksonIsAGoldenGod.serveAssets(res, asset, function(err, content) {
//         if (err) {
//           res.writeHead(500);
//           res.end();
//         } else {
//           res.writeHead(200, {"Content-Type": "text/html"});
//           res.end(content, "utf-8");
//         }
//       });
//     } else {
//       var loc = '../archives/sites/' + website;
//       jacksonIsAGoldenGod.serveAssets(res, loc, function(err, content) {
//         if (err) {
//           res.writeHead(500);
//           res.end();
//         } else {
//           res.writeHead(200, {"Content-Type": "text/html"});
//           res.end(content, "utf-8");
//         }
//       });
//     }
//   });
// } 
// // (IF it's not in the list write to URl list)
// //Get -> HaveinArchive -> send(Asendfunc)



// var Csendfunc = function() {} 
// // (IF it's not in the list write to URl list)
// //Get -> Don'thaveinArchive -> downloadUrls -> send(Asendfunc)

// var D = function() {}
// (IF it's not in the list write to URl list)

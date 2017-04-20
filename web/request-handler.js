var path = require('path');
var archive = require('../helpers/archive-helpers');
var jacksonIsAGoldenGod = require('./http-helpers');

var A = function (req, res) {
  jacksonIsAGoldenGod.serveAssets(res, archive.paths.siteAssets + '/index.html', function(err, content) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content, "utf-8");
    }
  });

};

exports.handleRequest = function (req, res) {
  var website = req.url.slice(1);
  console.log(req.method, ' ', req.url);
  if (req.url === '/' && req.method === 'GET' ) {
    A(req, res);
  } else if ( req.method === 'GET' ) {
  }
    // console.log(website)
    // archive.addUrlToList(website, function(err, content) {
    //   if ( err ) {
    //     res.writeHead(404);
    //     res.end();
    //   } else {

    //   }
    // })
  
};




// var B = function (req, res) {
  
//   var weHaveIt = null;
//   archive.isUrlInList(website, function(err, isInList) {
//     if ( err ) {
//       res.writeHead(404);
//       res.end();
//     } else {

//       if (isInList) {
//         jacksonIsAGoldenGod.serveAssets(res, archive.paths.siteAssets + "/" + website, function(err, content) {
//           if (err) {
//             console.log('B failed on send assets already in archives');
//           }
//         })
//       }

//       if (!isInList) {
//         archive.                      
//       }



//     }







//   })

//     var website = req.url.slice(1)
//     console.log(website)
//     archive.addUrlToList(website, function(err, content) {
//       if ( err ) {
//         res.writeHead(404);
//         res.end();
//       } else {

//       }
//     })


// }

// GET 'OTHER URL' 
  //SEE IF WE HAVE OR DO NOT HAVE 
    //IF WE HAVE, SERVEASSETS

//IF WE DO NOT HAVE ADDURLTOLIST
  //DOWNLOADLIST
  //SERVEASSSET


//POST REQUEST 
  //ADD URL TO LIST 
  //DOWNLOAD URLS

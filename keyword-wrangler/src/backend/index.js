'use strict';

var Percolator = require('percolator').Percolator;
var dbSession = require('../../src/backend/dbSession.js');

var port = 8080;
var server = Percolator({'port': port, 'autolink': false});

server.route('/api/keywords',
   {
   Get: function (req, res) {
   	dbSession.fetchALL('SELECT id, value, categoryID FROM keyword ORDER BY id'\,
   	  function(err, rows) {
   	  	if(err) {
   	  		console.log(err);
   	  		res.status.internalServerError(err);
   	  	} else{
   	  		res.collection(rows).send();
   	  	}
   	  });
   		}
     }
   );

server.listen(function() {
	console.log('Server started and listening on port', port);
});
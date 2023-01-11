const https = require('https');

https.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=2&srsearch=Honda', (resp) => {
	  let data = '';
	
	    // A chunk of data has been received.
	      resp.on('data', (chunk) => {
	          data += chunk;
	            });
	
	              // The whole response has been received. Print out the result.
	                resp.on('end', () => {
	                    console.log(JSON.stringify(JSON.parse(data)));
	                      });
	
	                      }).on("error", (err) => {
	                        console.log("Error: " + err.message);
	                        });



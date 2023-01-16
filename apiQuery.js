const https = require('https');

var response = "";

https.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=2&srsearch=Honda', (resp) => {
	  let data = '';
	
	    // A chunk of data has been received.
	      resp.on('data', (chunk) => {
	          data += chunk;
	            });
	
	              // The whole response has been received. Print out the result.
	                resp.on('end', () => {
	                   console.log("I am running");
				//console.log(JSON.stringify(JSON.parse(data)));
			    response = JSON.parse(data);
			    //console.log(JSON.stringify(response));
	                      });
	
	                      }).on("error", (err) => {
	                        console.log("Error: " + err.message);
	                        });

function apiprint(){
	if (JSON.stringify(response).length >2){

	
console.log(JSON.stringify(response));
console.log("test for async1");
}else{
	console.log("test for async");
	setTimeout(apiprint,200);
}
}
apiprint();

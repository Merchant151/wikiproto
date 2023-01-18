const https = require('https');
const fs = require('fs'),
	path = require('path'),
	filePath = path.join(__dirname, 'password.txt');

var response = "";
var search = "";

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
		//console.log(JSON.stringify(response));
		//console.log("test for async1");
		//console.log(response);
		//console.log(response.query);//this works
		//console.log(response.query.search);//this works 
		search = response.query.search;
		//console.log(search[0]);
	}else{
		//console.log("test for async");
		setTimeout(apiprint,200);
	}
}
var file = "";
function read(){
	fs.readFile(filePath,{encoding:'utf-8'}, function(err,data){
		if (!err){
			console.log("read function");
			//console.log(data);
			file = data;
			//console.log("file \n" +file);
		}else{
			console.log(err);
		}
	});
	//console.log("not sure I am reached");
	//return file;
}
function readCallBack(){
	if (file.length > 2){
		console.log(file);
	}else{
		console.log("readcallBack");
		setTimeout(readCallBack,500);
	}
}

apiprint();
read();
readCallBack();
//const cred = read();
//console.log("I am running now");
const redic = function(){
	console.log("read print \n" + file);
	
}
setTimeout(redic,2500); //wtf

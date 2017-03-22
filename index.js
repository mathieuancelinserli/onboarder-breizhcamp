//Example POST method invocation 
var Client = require('node-rest-client').Client;
 
var client = new Client();
var appID = process.env['APP_ID'];
// set content-type header and data as json in args parameter 
var args = {

    data: {
        "firstname":"Alain",
    	"lastname":"Chabat",
    	"email":"regis@con",
    	"appID":appID
    },
    headers: { "Content-Type": "application/json" }
};

client.post("http://onboarder-breizhcamp.cleverapps.io/play", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});
 
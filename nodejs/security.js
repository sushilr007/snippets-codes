**converting a string(password) into base64
var string = bundle.authData.password; //bundle.authData.password is a (string).
  var buffer = new Buffer(string); //Creating a buffer.
  var toBase64 = buffer.toString('base64'); //converting a string to base64


**Returning multiple values as connection label in zapier.
return ' {{bundle.authData.subdomain}} | {{bundle.authData.username}}' // It will send Domain and username in zapier field. 

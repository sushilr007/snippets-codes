// "z" is a object provided by Zapier. 
**converting response string to array** 
var ob =  JSON.parse(response.content); //accepting response as string and converting to object
           z.console.log("is ob array",Array.isArray(ob)); // to check whether it is array
           const bb = Array.prototype.slice.call(ob); // converting object  "ob" in array
           z.console.log("is bb array",Array.isArray(bb)); 
           z.console.log ("p1",response);
           return bb; // returning array present in "bb" 
           
**//normal returning using json parse.
return promise.then((response) => JSON.parse(response.content));

**//returning response in array.
return response["json"]["ms_response"]["xyz"];

**//Getting response as array and sending that response as object (Selective field)
var task = response["json"]["ms_response"]["tasks"]["task"];
var taskRes = [ //selective response
   {
      "id": task[0]["id"],
      "accepted_on": task[0]["accepted_on"],
   }]
return taskRes;

**//Getting response as string and sending as res as object (Selective fields)
var task = JSON.parse(response.content);
                  var taskres = [ //selective response
                     {
                        
                        "id": task.ms_response.tasks.task.id,
                        "accepted_on": task.ms_response.tasks.task.accepted_on,
                     }];
                  return taskres;
           

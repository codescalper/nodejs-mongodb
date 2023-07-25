-  **Assignment 1** : 

Make above server with API endpoint  `/demo`  as shown above :

1.  Try to call this API in your browser  `http://localhost:8080/demo?name=Youstart`  - this will return a response of  `req.query`  JSON object
    
2.  Create 3 query parameters  `name`,  `age`,  `subject`  with some values. Check the final output of  `req.query`  - can you find all data on server side. Can you send it back to client via  `res`  object.
    

**2. Send data via Request Params**

In this method you can have a URL with url path like  `/Youstart/express`  at end it translates in a param string. In param part string each value is separated by  `/`. As you can see that URL only contains  `value`  not the  `key`  part of data.  `key`  part is decided by the endpoint definition at express server

server.get("/demo/:name/:subject",function(req,res){
    console.log(req.params) // prints all data in request object
    res.send(req.query);  // send back same data in response object
})

So sequence of values matter in this case. As values sent from client are matched with  `name`  and  `subject`  params of URL later.

-  **Assignment 2** : 

Make above server with API endpoint  `/demo`  as shown above :

1.  Try to call this API in your browser  `http://localhost:8080/demo/Youstart/Express`  - this will return a response of  `req.params`  JSON object
    
2.  Create 3 URL params  `name`,  `age`,  `subject`  . Call the URL and check the final output of  `req.params`  - can you find all data on server side. Can you send it back to client via  `res`  object.
    

**3. Send data via Request Body**

Final method of sending data is via body part of request. We can send data directly to body using URL. We have to either use one of these methods

1.  Use a HTML Form and make  `method`  value as  `POST`. This will make all name=value pair to go via body of request.
    
2.  Use special browsers like POSTMAN to change the body directly. (We will see this example in next classes)
    
```js
server.post("/demo",function(req,res){
    console.log(req.body) // prints all data in request object
    res.send(req.body);  // send back same data in response object
})
```


### Related Links/Videos

1. [Middleware Explanation video](https://www.youtube.com/watch?v=qkMJL0FwiyE)
2. [List of useful 3rd party middleware for Express](https://expressjs.com/en/resources/middleware.html)
3. [List of HTTP response status](https://www.restapitutorial.com/httpstatuscodes.html) 

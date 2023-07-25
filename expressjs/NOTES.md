### [[ Chapter Notes ]] 
 
- **ExpressJS** is *de-facto* Node framework - and used in most Node applications which are used as web server.
- You can install express `npm install express`
- Express has few level of methods :
	- Application methods : e.g. app.use()
	- Request methods
	- Response methods
	- Middleware methods
	- Router methods

- **Response** methods (**res** is our response objects)
	- **res.send()** - for sending HTML
	- **res.sendFile(**) - for sending File
	- **res.json** - for sending JSON 
	- **res.sendStatus(404)** - for sending HTTP status only
	
- **HTTP Request** Types we generally use :
	- GET
	- POST
	- PUT
	- DELETE
	- PATCH
 - API / Endpoints / Routes are used inter-changeably but they are related to server paths.

- **Middle-ware** : Modifies the request before it reaches the next middleware or endpoints.
- Sequence of middleware is very important, as first middleware is first traversed by request.
- Middle-wares can be used for many use cases, like loggers, authentication, parsing data etc.
- Middle-ware can be :
	- Application level : server.use(**middleware**) 
	- Router level : server.get('/', **middleware**, (req,res)=>{})
	- Built-in middleware : **express.json()** [ for parsing body data], **express.static()**[for static hosting]
	- External Middle-wares - like **morgan**

- **Request** properties (**req** is our request object)
	- **req.ip** - IP address of client
	- **req.method** - HTTP method of request
	- **req.hostname** - like google.com / localhost
	- **req.query** - for capturing query parameters from URL e.g. localhost:8080 ? **query=value**
	- **req.body** -for capturing request body data (but its needs a middleware for body data decoding)
	-  **req.params** - for capturing URL parameters for route path like `/products/:id` 

- **Static Hosting** : we can make 1 or more folders as static hosted using **express.static** middleware.
	`server.use(express.static(< directory >))`
Static hosting is like sharing a folder/directory and making its file readable as it is.
Note : `index.html` is default file which would be read in a static hosted folder, if you don't mention any file name.

3 major ways of sending data from client to server via request are :

**1. Send data via URL in Query String**

This is easiest method to send data and mostly used in GET request.

When you have URL with  `?name=Youstart&subject=express`  at end, it translates in a query string. In query string each key,value pair is separated by  `=`  and between 2 such pairs we put  `&`.

To read such data in express you can use  `req.query`  :
```javascript
server.get("/demo",function(req,res){
    console.log(req.query) // prints all data in request object
    res.send(req.query);  // send back same data in response object
})
```

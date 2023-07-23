import fs from 'node:fs';

fs.readFile('example.txt', 'utf-8', (err, data) => { //Asynchronous module 
  if (err) {
    console.error(err);  // remember async function return output in callback
  } else {
    console.log(data);
   
  }
});


console.log('hello');

// if we want to make it synchoronous we can use method

// fs.readFileSync()

//if ypu'll install noedemon ypu';; see thet it's in dev dependencies
//So what's the difference between dependencies adn devDependencies 

// Dependencies:

// Dependencies are the external packages that are required for your application 
// to run correctly in the production environment.

// DevDependencies:

// DevDependencies are the external packages that are only required during the
// development and testing phase of your application.
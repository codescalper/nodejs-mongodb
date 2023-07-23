// Q1
// if we delete node_modules then we can run npm install to download the modules again and then we can tun it 


//Q2
import os from 'os';

console.log("Cpu Architecture =",os.arch()) //return the cpu architecture


console.log("Free memory", os.freemem()) //it returns the amount of free system memory in bytes


console.log("Total Memory:",os.totalmem()) // it returns the total memory


//It returns the list of network interfaces
console.log('List of network Interfaces: ' + os.networkInterfaces());

console.log('OS default directory for temp files : ' + os.tmpdir()); //it gives temporary directory of temp files


//Q2


//we can use command line arguments in node js by using process.argv arguemenet

const args = process.argv.slice(2)//arguement command line 
if (args.length >= 2) {
    const num1 = parseInt(args[0]);
    const num2 = parseInt(args[1]);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    } else {
      console.log("Invalid arguments. Please provide two numbers.");
    }
  } else {
    console.log("Please provide two numbers as command line arguments.");
  }

//Asynchoronous nature 



import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
const app = express();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products

app.use(bodyParser.json())

//Post /products Generally Create API 
app.post('/products',(req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.send(req.body)
})

//Get method ->  generally Read API
app.get('/products',(req,res)=>{
    res.json(products)
})

//Get method ->  generally Reading via id
app.get('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const product = products.find(p=>p.id===id) //return the element of that id 
    //.find() is the higher prder function 
    console.log(req.params)
    res.json(product)
})

//Put method ->  generally Update via id
app.put('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const productIdx = products.findIndex(p=>p.id===id) //return the element of that id 
    //.find() is the higher prder function 

    products.splice(productIdx,1,{id:id,...req.body})
    console.log(req.params)
    res.json() //put is basicalyy use to replace whole element from the array of json 
})

//Patch method ->  generally Update via id but partially
app.patch('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const productIdx = products.findIndex(p=>p.id===id) //return the element of that id 
    //.find() is the higher prder function 
    var product = products[productIdx]
    products.splice(productIdx,1,{...product,...req.body})
    res.json() //patch is basicalyy use to replace partially element from the array of json 
})

app.delete('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const productIdx = products.findIndex(p=>p.id===id) //return the element of that id 
    //.find() is the higher prder function 
    products.splice(productIdx,1)
    res.json() //Delete is used to delete an itenm from the array or json
})





app.listen(3000,()=>{
    console.log(`Listening at http://localhost:3000`)
})
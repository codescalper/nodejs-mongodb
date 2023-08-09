import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())





var dummyData;
fetch('https://dummyjson.com/quotes').then((response)=>{
    if(response.ok){
        return response.json()
    }else{
        throw new Error("Something went wrong")
    }


}).then((data)=>{
    // console.log(data)
    dummyData = data;
}).catch((error)=>{
    console.log(error)
})

//To get data using get method 

app.get('/quotes',(req,res)=>{
    res.status(200).json(dummyData.quotes)
})


// /To get data using get method but with id

app.get('/quotes/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    let data = dummyData.quotes
    const quote  = data.findIndex(i=>i.id===id)
    res.status(200).json(data[quote])
})

//TO Post data which is to create data

app.post('/quotes',(req,res)=>{
    const input = req.body;
    let data = dummyData.quotes;
    data.push(input)
    res.status(201).send('Inserted')
})

//To Put Data which is to Update data by id


app.put('/quotes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const input = req.body;
    let data = dummyData.quotes;
    const quoteIdx  = data.findIndex(i=>i.id===id)
    data.splice(quoteIdx,1,{id:id,...input})
    res.status(201).json({status:'Successfull'})
})

//app.patch to update the elements partially 

app.patch('/quotes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const input = req.body;
    let data = dummyData.quotes;
    const quoteIdx  = data.findIndex(i=>i.id===id)
    const quoteAtIdx = data[quoteIdx]
    data.splice(quoteIdx,1,{...quoteAtIdx,...input}) //input is over writing the origianl array not changing completely
    res.status(201).json({status:'Successfull'})


})

//Delete items => Using delete method 
app.delete('/quote/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let data = dummyData.quotes;
    const quoteIdx = data.findIndex(i=>i.id ===id)
    data.splice(quoteIdx,1)
    res.json({status:'Successfull'})
})

app.listen(3000,()=>{
    console.log(`Listening at http://localhost:3000`)
})
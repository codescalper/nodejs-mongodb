import express from 'express'

const app = express();

const port = process.env.PORT || 3000;

//Assignment no 1.1
app.get('/demo',(req,res)=>{
    res.send(req.query)
})

//Assignment no 1.2

// http://localhost:3000/demo?name=Mayank&age=18&subject=Physics 
// output
// {
//     "name": "Mayank",
//     "age": "18",
//     "subject": "Physics"
// }


//Assignment 2 
app.get("/demo/:name/:subject",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
}) 


//Assignemt 3 

//sending data via req body 

app.post('./demo',(req,res)=>{
    var input = req.body
    console.log(input)
    // res.send(input)
})


app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
})


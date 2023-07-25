import express from "express";

const hello = {
    name:'Mayank',
    lastName: 'Singh'
}

const app = express();
const port = process.env.PORT || '3000'

//middleware
// there are pre made middleware here we will create new middleware
// so this is basically to create server log like what's the date now many req is getting etc
app.use((req,res,next)=>{
    console.log(req.method, req.url,req.hostname,req.ip,new Date(), req.get('User-Agent'))
    next()
})




//routes , API , EndPoint

app.get('./check',(req,res)=>{ // On the browser you'll only see GET method
    res.send('Get Method')
})
// for checking method except from get we can use POSTMAN

app.delete('./check',(req,res)=>{ 
    res.send('Get Method')
})

app.post('./check',(req,res)=>{ 
    res.send('Get Method')
})

app.patch('./check',(req,res)=>{ 
    res.send('Get Method')
})





app.get('/',(req,res)=>{
//    res.send('<h1> Hello WOorld </h1>') // it send the text in html form
    //  res.sendFile('C:\\Users\\mayank singh\\Desktop\\nodejs-mongodb\\expressjs\\NOTES.md') //it's used to sendFile make sure to include abssolute path not realtive path 
    //   res.json(hello) for sending json file


})



app.listen(port,()=>[
    console.log(`Listening at http://localhost:${port}`)
])


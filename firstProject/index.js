
const { response, application } = require('express');
const express=require('express');
const { readFile } = require('fs').promises;

const app=express();

app.get('/',async(request,response)=>{
    response.send(await readFile('./home.html','utf-8'))
});


// app.get('/',(request,response)=>{
//        readFile("./index.html",'utf-8',(err,html)=>{
//            if(err){
//                response.status(500).send('sorry out of order');
//            }
//            response.send(html);
//        }); 
// });




app.listen(process.env.PORT ||3000,()=>console.log('App Available on http://localhost:30000'));

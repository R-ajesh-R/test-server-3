const express=require('express');
const app=express();
const http=require('http');

app.get('*',(req,res)=>{
    res.json({'mess':'helloworld'});
});

const server = http.createServer(app);

server.listen(5010);
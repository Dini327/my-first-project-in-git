var express=require('express');
var app=express()

app.listen(3020,function(){
    console.log('Example app listening on nport 3000!');
})

app.get('/',function(req,res){
    res.send('hello world ❤❤❤');
})
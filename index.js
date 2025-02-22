var express=require('express');
var app=express()

app.listen(3020,function(){
    console.log('Example app listening o nport 3000!');
})

app.get('/',function(req,res){
    res.send('hello world ❤❤❤');
})
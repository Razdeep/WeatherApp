const express=require('express');
const app=express();
const port=process.env.PORT||1998;

app.listen(port,function(){
    console.log(`Server started at ${port}`);
});
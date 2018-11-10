const express=require('express');
const app=express();
const port=process.env.PORT||1998;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port,function(){
    console.log(`Server started at ${port}`);
});
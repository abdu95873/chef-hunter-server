const express = require('express');
const app= express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());

app.get ('/', (req, res) =>{
    res.send('i am running')
});


app.listen(port, ()=>{
    console.log(`i am running on port :${port}`)
})
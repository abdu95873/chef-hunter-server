const express = require('express');
const app= express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());
const chef = require('./Data/chef/chef.json');

app.get ('/', (req, res) =>{
    res.send('i am running')
});


app.get ('/chef', (req, res) =>{
    res.send(chef);
});

app.get ('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef =chef.find(n=>n._id === id);
    res.send(selectedChef); 
    console.log(selectedChef);
});

app.listen(port, ()=>{
    console.log(`i am running on port :${port}`)
})
const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello world!");
});


app.listen(3333);
console.log("Server listen on port 3333");
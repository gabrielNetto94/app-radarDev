const express = require('express');

const app = express();

app.use(express.json());
//Query params: request.query (Filtros, ordenação, paginação)
//Query Params: request.params (Identificar um recurso na alteração, remoção)
//Body 

app.post('/', (req,res) => {
    console.log(req.body);
    res.json({message:true});
});

app.listen(3333);
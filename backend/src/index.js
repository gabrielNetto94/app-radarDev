const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);//importar as rotas da aplicação SEMPRE depois do express.json 

mongoose.connect('mongodb+srv://admin:admin@cluster0-4otpl.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

//Query params: request.query (Filtros, ordenação, paginação)
//Query Params: request.params (Identificar um recurso na alteração, remoção)
//Body : corpo da requisição


app.listen(3333);
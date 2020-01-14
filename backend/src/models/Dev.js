const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name:String,
    github_username: String,
    bio: String,
    avatar: String,
    techs: [String], // vetor de string
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema); //param 1 : O nome da tabela que será criada no banco, param 2: Estrutura do banco 
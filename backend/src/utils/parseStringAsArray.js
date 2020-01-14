module.exports = function parseStringAsArray(arrayAsString){
    return  arrayAsString.split(',').map(tech => tech.trim());//converte as techs em array, percorre os elementos e remove os espaços em branco "tech.trim()"
}
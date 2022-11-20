const req = require("express/lib/request")

module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ['fácil', 'médio', 'dificil'];
  if(!classifications.includes(difficulty)) {
    {message : 'o campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\''}
  }
  next();
}
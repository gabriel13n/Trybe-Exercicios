module.exports = (req, res, next) => {
  const { price } = req.body;
  if(price === undefined) {
    return req.status(400).json(
      { message: 'O campo price é obrigatório'},
    )
  }

  if(price < 0 || typeof price !== 'number') {
    return res.status(400).json(
      {message: 'O campo price deve ser um numero maior ou igual a 0'},
    )
  }
  next();
}
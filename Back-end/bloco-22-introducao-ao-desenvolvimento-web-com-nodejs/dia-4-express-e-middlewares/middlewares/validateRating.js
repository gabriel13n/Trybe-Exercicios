const res = require("express/lib/response")

module.exports = (req, res, next) => {
  const { rating } = req.body.description
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json(
      {message:'o campo rating deve ser um número inteiro entre 1 e 5'},
    )
  }
  next();
}
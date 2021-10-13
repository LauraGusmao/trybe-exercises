function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || typeof price !== 'number' || price < 0) return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

module.exports = validatePrice;

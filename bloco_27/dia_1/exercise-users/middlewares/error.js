module.exports = (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.stauts).json({ message: err.message });
  }

  console.error(err);

  res.status(500).json({ message: 'Erro interno do servidor' });
};

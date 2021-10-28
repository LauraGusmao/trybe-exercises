const firstNameValid = (req, _res, next) => {
  const { firstName } = req.body;

  if (firstName.includes(undefined) || firstName.includes(null) || firstName.includes('')) {
    const err = new Error('O campo "firstName" é obrigatório');
    err.status = 400;
    return next(err);
  }

  if (firstName.length < 3) {
    const err = new Error('O campo "firstName" deve ter pelo menos 3 caracteres');
    err.status = 400;
    return next(err);
  }

  next();
};

const lastNameValid = (req, _res, next) => {
  const { lastName } = req.body;

  if (lastName.includes(undefined) || lastName.includes(null) || lastName.includes('')) {
    const err = new Error('O campo "lastName" é obrigatório');
    err.status = 400;
    return next(err);
  }

  if (lastName.length < 3) {
    const err = new Error('O campo "lastName" deve ter pelo menos 3 caracteres');
    err.status = 400;
    return next(err);
  }

  next();
};

const emailValid = (req, _res, next) => {
  const { email } = req.body;

  if (email.includes(undefined) || email.includes(null) || email.includes('')) {
    const err = new Error('O campo "email" é obrigatório');
    err.status = 400;
    return next(err);
  }

  if (!email.includes('@') || !email.includes('.com')) {
    const err = new Error('Informe um email válido');
    err.status = 400;
    return next(err);
  }

  next();
};

const passwordValid = (req, _res, next) => {
  const { password } = req.body;
  const PASSWORD_REGEX = /(.){6,}/;

  if (password.includes(undefined) || password.includes(null) || password.includes('')) {
    const err = new Error('O campo "password" é obrigatório');
    err.status = 400;
    return next(err);
  }

  if (!PASSWORD_REGEX.test(password)) {
    const err = new Error('O campo "password" deve ter pelo menos 6 caracteres');
    err.status = 400;
    return next(err);
  }

  next();
};

module.exports = {
  firstNameValid,
  lastNameValid,
  emailValid,
  passwordValid,
};

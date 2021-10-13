function validateUsername(req, res, next) {
  const { username } = req.body;
  if (!username || username < 3) return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email || !email.includes('@') || !email.includes('.com')) 
    return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

function validatePassword(req, res, next) {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;
  if (!password || password < 3 || password > 8 || !password.match(passwordRegex) )
    return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

function validateToken(req, res, next) {
  const token = req.headers.authorization;
  const tokenRegex = /[\w\d]{12}/;

  if (!token || !token.match(tokenRegex))
  return res.status(401).json({ message: 'invalid token' });

  next(); 
};

module.exports = { validateUsername, validateEmail, validatePassword, validateToken };

const express = require('express');
// const rescue = require('express-rescue');

const userRouter = require('./routers/userRouter');
const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

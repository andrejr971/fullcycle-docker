const express  = require('express');
const port = 3333;

const app = express();

app.get('/', (req, res) => res.send('<h1>Full cycle</h1>'));

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
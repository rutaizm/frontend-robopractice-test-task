const express = require('express');
const app = express();
const cors = require('cors')
const port = 8080

const allowedCors = [
  'https://localhost:3000',
  'http://localhost:3000'
];

app.use(cors(allowedCors));

app.get('/api/users', (req, res) => {
  res.send(
      require('./data.json')
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
